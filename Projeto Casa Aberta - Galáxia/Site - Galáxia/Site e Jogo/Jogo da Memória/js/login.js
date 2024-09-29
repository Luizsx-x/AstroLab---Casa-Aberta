const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length >= 3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('enabled', '');
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location.href = "/Projeto Casa Aberta - Galáxia/Site - Galáxia/Site e Jogo/Jogo da Memória/pages/game.html"; 
};

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
