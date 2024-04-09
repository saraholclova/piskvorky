let currentPlayer = 'circle';

const selectButton = (event) => {
  event.target.classList.add('game__square--circle');
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
