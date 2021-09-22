const emailLogin = document.getElementById('email');
const passwordLogin = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

function loginVerification(event) {
  event.preventDefault();
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', loginVerification);
