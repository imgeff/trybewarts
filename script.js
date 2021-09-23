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

// Contador de Caracteres disponíveis
const textAreaComent = document.getElementById('textarea');//Captura o elemento TextArea
const counterCaractere = document.getElementById('counter');//Captura a tag p com o número 500
function caractere() { // Função que será chamada no evento de keyup
  const subtraction = 500 - textAreaComent.value.length; // Pega quantos caracteres existem no textarea através do .length e subtrai por 500 que é o número maximo de caracteres
  counterCaractere.innerText = subtraction; // atualiza a tag p com o resultado da subtração  entre 500 e o número total de caracteres digitados até o momento
}
textAreaComent.addEventListener('keyup', caractere); // Invoca a função acima a cada tecla pressionada