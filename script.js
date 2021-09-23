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

const agreementCheckBox = document.getElementById('agreement');
const acceptBtn = document.getElementById('submit-btn');
function acceptVerificate() {
  if (agreementCheckBox.checked) {
    agreementCheckBox.setAttribute('checked', 'checked');
    acceptBtn.disabled = false;
  } else {
    agreementCheckBox.removeAttribute('checked');
    acceptBtn.disabled = true;
  }
}
agreementCheckBox.addEventListener('click', acceptVerificate);
