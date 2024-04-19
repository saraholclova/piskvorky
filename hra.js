import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const selectButton = (event) => {
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
};

//Výběr všech tlačítek + nasazení posluchače//

const allButtons = document.querySelectorAll('.game__square');

allButtons.forEach((button) => {
  button.addEventListener('click', selectButton);
});

// const herniPole = ['_', 'o', 'x', 'x', 'o', '_', '_', 'o', '_']; vymyslet vlastní?

//tvorba vlastního pole z buttonků//

const buttonElm = Array.from(allButtons);
console.log(buttonSquare);

//procházení všech políček pomocí .map//

const gameField = buttonElm.map((element) => {
  if (element.classList.constains('game__square--circle')) {
    return 'o';
  } else if (element.classList.contains('game__square--cross')) {
    return 'x';
  } else {
    return '_';
  }
});

//předání pole funkci findWinner//

const winner = findWinner(herniPole);
if (winner === 'o' || winner === 'x') {
  alert(`Vyhrál hráč se symbolem ${winner}.`); // Vyhrál hráč se symbolem 'o' nebo 'x'.
}

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
