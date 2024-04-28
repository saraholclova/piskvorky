import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const selectButton = async (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__square--circle');
    currentPlayer = 'cross';
    document.querySelector('.game__symbol').src = 'images/cross.svg';
  } else {
    event.target.classList.add('game__square--cross');
    currentPlayer = 'circle';
    document.querySelector('.game__symbol').src = 'images/circle.svg';
  }

  //tvorba vlastního pole z buttonků//

  const buttonElm = Array.from(allButtons);

  //procházení všech políček pomocí .map//

  const gameField = buttonElm.map((button) => {
    if (button.classList.contains('game__square--circle')) {
      return 'o';
    } else if (button.classList.contains('game__square--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  //předání pole funkci findWinner, kdo je vítěz + hláška alert//

  const winnerIs = () => {
    const winner = findWinner(gameField);

    if (winner === 'o') {
      alert('Kolečko vyhrává!');
      location.reload();
    } else if (winner === 'x') {
      alert('Křížek vyhrává!');
      location.reload();
    } else if (winner === 'tie') {
    }
  };
  setTimeout(winnerIs, 250);

  //odeslání požadavku na API

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: gameField,
        player: 'x',
      }),
    },
  );

  //získání odpovědi z API

  const data = await response.json();
  const { x, y } = data.position;
  const index = allButtons[x + y * 10];

  //tlačítko se odklikne pomocí umělé inteligence
  if (currentPlayer === 'cross') {
    index.click();
  }
};

//Výběr všech tlačítek + nasazení posluchače//

const allButtons = document.querySelectorAll('.game__square');

allButtons.forEach((button) => {
  button.addEventListener('click', selectButton);
});

///BONUS úkol 3///
const restart = document.querySelector('.game__nav--restart');

const confirm = () => {
  if (window.confirm('Chcete tuto hru restartovat?')) {
    // window.location.reload();
  } else {
    event.preventDefault();
  }
};

restart.addEventListener('click', confirm);
