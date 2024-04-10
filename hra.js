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

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectButton);

///BONUS///
const restart = document.querySelector('.game__nav--restart');

const confirm = () => {
  if (window.confirm('Chcete tuto hru restartovat?')) {
    window.location.reload();
  } else {
    event.preventDefault();
  }
};

restart.addEventListener('click', confirm);
