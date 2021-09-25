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
const textAreaComent = document.getElementById('textarea'); // Captura o elemento TextArea
const counterCaractere = document.getElementById('counter'); // Captura a tag p com o número 500
function caractere() { // Função que será chamada no evento de keyup
  const subtraction = 500 - textAreaComent.value.length; // Pega quantos caracteres existem no textarea através do .length e subtrai por 500 que é o número maximo de caracteres
  counterCaractere.innerText = subtraction; // atualiza a tag p com o resultado da subtração  entre 500 e o número total de caracteres digitados até o momento
}
textAreaComent.addEventListener('keyup', caractere); // Invoca a função acima a cada tecla pressionada

// Substituir todos os campos
acceptBtn.addEventListener('click', (event) => {
  // Nome e sobrenome
  event.preventDefault();
  const inputName = document.getElementById('input-name');
  const inputLastName = document.getElementById('input-lastname');
  const nameValue = 'Nome: ' + inputName.value + ' ' + inputLastName.value;
  const divName = document.getElementById('name-complete');
  const pTagName = document.createElement('p');
  pTagName.innerText = nameValue;
  divName.appendChild(pTagName);
  divName.removeChild(inputName);
  divName.removeChild(inputLastName);
});
acceptBtn.addEventListener('click', () => {
  // Email
  const divEmailHouse = document.getElementById('email-house');
  const inputEmail = document.getElementById('input-email');
  const emailValue = `Email: ${inputEmail.value}`;
  const pTagEmail = document.createElement('p');
  const labelHouse = document.querySelector('label');
  pTagEmail.innerText = emailValue;
  divEmailHouse.appendChild(pTagEmail);
  divEmailHouse.removeChild(inputEmail);
  divEmailHouse.removeChild(labelHouse);
});
acceptBtn.addEventListener('click', () => {
  // Casa
  const divEmailHouse = document.getElementById('email-house');
  const selectHouse = document.getElementById('house');
  const selectHouseValue = selectHouse.value;
  const pTagHouse = document.createElement('p');
  const spanHouse = document.getElementById('house-before');
  pTagHouse.innerText = `Casa: ${selectHouseValue}`;
  spanHouse.appendChild(pTagHouse);
  divEmailHouse.removeChild(selectHouse);
});
acceptBtn.addEventListener('click', () => {
  // Família
  let familyCheckedValue;
  const divFamily = document.getElementById('family-options');
  const spanFamily = document.querySelectorAll('.family');
  const familyRadios = document.getElementsByName('family');
  for (let index = 0; index < familyRadios.length; index += 1) {
    if (familyRadios[index].checked === true) {
      familyCheckedValue = familyRadios[index].value;
    }
  }
  const pTagFamily = document.createElement('p');
  pTagFamily.innerText = `Família: ${familyCheckedValue}`;
  divFamily.appendChild(pTagFamily);
  for (let index = 0; index < spanFamily.length; index += 1) {
    divFamily.removeChild(spanFamily[index]);
  }
});
acceptBtn.addEventListener('click', () => {
  // CheckBox conteúdo
  const divCheckBoxOptions = document.getElementById('checkbox-options');
  const valueCheckeds = [];
  const inputContents = document.querySelectorAll('.subject');
  const spanContents = document.querySelectorAll('.contents');
  for (let index = 0; index < inputContents.length; index += 1) {
    if (inputContents[index].checked === true) {
      valueCheckeds.push(` ${inputContents[index].value}`);
    }
  }
  const pTagCheckBox = document.createElement('p');
  pTagCheckBox.innerText = `Matérias: ${valueCheckeds}`;
  divCheckBoxOptions.appendChild(pTagCheckBox);
  for (let index = 0; index < spanContents.length; index += 1) {
    divCheckBoxOptions.removeChild(spanContents[index]);
  }
});
acceptBtn.addEventListener('click', () => {
  // Avaliação
  let avaliationCheckedValue;
  const divAvaliation = document.getElementById('avaliation');
  const spanAvaliation = document.getElementById('note');
  const radiosNote = document.getElementsByName('rate');
  for (let index = 0; index < radiosNote.length; index += 1) {
    if (radiosNote[index].checked === true) {
      avaliationCheckedValue = radiosNote[index].value;
    }
  }
  const pTagAvaliation = document.createElement('p');
  pTagAvaliation.innerText = `Avaliação: ${avaliationCheckedValue}`;
  divAvaliation.appendChild(pTagAvaliation);
  divAvaliation.removeChild(spanAvaliation);
});
acceptBtn.addEventListener('click', () => {
  // Observações
  const textarea = document.getElementById('textarea');
  const textareaValue = textarea.value;
  const divComent = document.getElementById('coment');
  const pTagTextarea = document.createElement('p');
  pTagTextarea.innerText = `Observações: ${textareaValue}`;
  divComent.appendChild(pTagTextarea);
  divComent.removeChild(textarea);
});
acceptBtn.addEventListener('click', () => {
  // Remove Labels e contador textarea
  const labels = document.querySelectorAll('label');
  for (let index = 0; index < labels.length - 1; index += 1) {
    labels[index].remove();
  }
  const counter = document.getElementById('counter');
  counter.remove();
});
