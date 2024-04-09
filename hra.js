let currentPlayer = 'circle';

const buttonElement = document.querySelector('button:nth-child(1)');

const selectButton = (event) => {
  event.target.classList.add('game__square--circle');
};

buttonElement.addEventListener('click', selectButton);
s;
