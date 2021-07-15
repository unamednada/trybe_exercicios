const estadosBrasileiros = ['Acre (AC)',
'Alagoas (AL)',
'Amapá (AP)',
'Amazonas (AM)',
'Bahia (BA)',
'Ceará (CE)',
'Distrito Federal (DF)',
'Espírito Santo (ES)',
'Goiás (GO)',
'Maranhão (MA)',
'Mato Grosso (MT)',
'Mato Grosso do Sul (MS)',
'Minas Gerais (MG)',
'Pará (PA)',
'Paraíba (PB)',
'Paraná (PR)',
'Pernambuco (PE)',
'Piauí (PI)',
'Rio de Janeiro (RJ)',
'Rio Grande do Norte (RN)',
'Rio Grande do Sul (RS)',
'Rondônia (RO)',
'Roraima (RR)',
'Santa Catarina (SC)',
'São Paulo (SP)',
'Sergipe (SE)',
'Tocantins (TO)']

const selectEstados = document.querySelector('#state');

estadosBrasileiros.forEach(value => {
  const state = document.createElement('option');
  state.name = 'state';
  state.innerText = value;
  selectEstados.appendChild(state);
});

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
});

function charLimit(input, lim) {
  if (input.length > lim) {
    return false;
  }
  return true;
}

function isRequired(input) {
  if (!input) {
    return false;
  }
  return true;
}

// Inspiração para regex: https://gist.github.com/jacksonfdam/3000275

function isEmail(input) {
  if (/\w@\w/.test(input)) {
    return true;
  }
  return false;
}

function validateName() {
  const name = document.querySelector('#name').value;
  if (!isRequired(name) || !charLimit(name, 40)) {
    window.alert('Insira seu nome!');
    return false;
  }
  return true;
}

submitBtn.addEventListener('click', validateName);

function validateEmail() {
  const email = document.querySelector('#email').value;
  if (!isRequired(email) || !charLimit(email, 50) || !isEmail(email)) {
    window.alert('Insira um e-mail válido!');
    return false;
  }
  return true;
}

submitBtn.addEventListener('click', validateEmail);

submitBtn.addEventListener('click', function() {
  const cpf = document.querySelector('#cpf').value;
  if (!isRequired(cpf) || !charLimit(cpf, 11)) {
    window.alert('Insira um número de CPF válido!');
  }
});

