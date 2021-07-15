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
  state.id = value;
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

const firstFieldset = document.querySelector('#part-one');
const inputList = Array.from(document.querySelectorAll('#part-one input'));

function validateForm() {
  let isValidForm = 1;
  for (let i = 0; i < inputList.length; i += 1) {
    const input = inputList[i];
    const maxLength = input.maxlength;
    if (!isRequired(input.value) || !charLimit(input.value, maxLength)) {
      window.alert(`Insira um(a) ${input.name} válido(a)`);
      isValidForm -= 1;
    }
    if (input.id === 'email' && !isEmail(input.value)) {
      window.alert(`Insira um(a) ${input.name} válido(a)`);
      isValidForm -= 1;
    }
  }
  if (isValidForm === 1) {
    returnCV();
  }
}

submitBtn.addEventListener('click', validateForm);

function returnCV() {
  const form = document.querySelector('form');
  form.innerHTML = '';
  const CV = document.createElement('div');
  form.appendChild(CV);
  for (let i = 0; i < inputList.length; i += 1) {
    const input = inputList[i];
    const info = document.createElement('p');
    info.innerText = `${input.name}: ${input.value}`
    CV.appendChild(info);
    CV.appendChild(document.createElement('br'));
  }
  const state = document.createElement('p');
  state.innerText = `Estado: ${selectEstados.options[selectEstados.selectedIndex].text}`;
  CV.appendChild(state);
}
