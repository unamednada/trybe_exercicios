import './node_modules/just-validate/dist/js/just-validate.js';

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

// submitBtn.addEventListener('click', function(event) {
//   event.preventDefault();
// });

// function charLimit(input, lim) {
//   if (input.length > lim) {
//     return false;
//   }
//   return true;
// }

// function isRequired(input) {
//   if (!input) {
//     return false;
//   }
//   return true;
// }

// // Inspiração para regex: https://gist.github.com/jacksonfdam/3000275

// function isEmail(input) {
//   if (/\w@\w/.test(input)) {
//     return true;
//   }
//   return false;
// }

// // Date regex: https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy

// function isDate(input) {
//   if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(input)) {
//     return true;
//   }
//   return false;
// }

// const inputList = Array.from(document.querySelectorAll('input'));
// const inputList2 = Array.from(document.querySelector('#part-two'));


// function validateForm() {
//   let isValidForm = 1;
//   for (let i = 0; i < inputList.length; i += 1) {
//     const input = inputList[i];
//     const maxLength = input.maxlength;
//     if (!isRequired(input.value) || !charLimit(input.value, maxLength)) {
//       window.alert(`Insira um(a) ${input.name} válido(a)`);
//       isValidForm -= 1;
//     }
//     if (input.id === 'email' && !isEmail(input.value)) {
//       window.alert(`Insira um(a) ${input.name} válido(a)`);
//       isValidForm -= 1;
//     }
//     if (input.id === 'data-inicio' && !isDate(input.value)) {
//       window.alert(`Insira um(a) ${input.name} válido(a)`);
//       isValidForm -= 1;
//     }
//   }
//   if (isValidForm === 1) {
//     returnCV();
//   }
// }

// submitBtn.addEventListener('click', validateForm);

// function returnCV() {
//   const textArea = document.querySelector('textarea').value;
//   const form = document.querySelector('form');
//   const CV = document.createElement('div');
//   form.innerHTML = '';
//   form.appendChild(CV);
//   for (let i = 0; i < inputList.length; i += 1) {
//     const input = inputList[i];
//     const info = document.createElement('p');
//     if (input.type === 'radio' && input.checked) {
//       info.innerText = `Tipo de moradia: ${input.id}`
//     } else if (input.type !== 'radio') {
//       info.innerText = `${input.name}: ${input.value}`
//     }
//     CV.appendChild(info);
//     CV.appendChild(document.createElement('br'));
//   }
//   const state = document.createElement('p');
//   state.innerText = `Estado: ${selectEstados.options[selectEstados.selectedIndex].text}`;
//   CV.appendChild(state);

//   const resumo = document.createElement('p');
//   resumo.innerText = `Resumo do CV: 
//   ${textArea}`;
//   CV.appendChild(resumo);
// }

new JustValidate('#validate-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 40,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    descricao: {
      required: true,
      maxLength: 500
    },
    cv: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    address: {
      required: true,
      maxLength: 200
    },
    date: {
      required: true
    },
  },
  messages: {
    name: {
      required: 'Insira um nome válido',
      maxLength: 'Campo nome deve possuir no máximo 40 caracteres'
    },
    email: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo e-mail deve possuir no máximo 40 caracteres',
      email: 'Insira um e-mail válido'
    },
    cpf: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo CPF deve possuir no máximo 11 números'
    },
    descricao: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo descrição deve possuir no máximo 500 caracteres'
    },
    cv: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo resumo deve possuir no máximo 1000 caracteres'
    },
    cargo: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo cargo deve possuir no máximo 40 caracteres'
    },
    cidade: {
      required: 'Insira um e-mail válido',
      maxLength: 'Campo cidade deve possuir no máximo 28 caracteres'
    },
    address: {
      required: 'Insira um endereço válido',
      maxLength: 'Campo endereço deve possuir no máximo 200 caracteres'
    },
    date: {
      required: 'Escolha uma data'
    },
  }
});

const reset = document.querySelector('#reset');

function resetForm(event) {
  event.preventDefault();
  const inputList = document.querySelectorAll('input');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].value = '';
  }
  const inputText = document.querySelector('textarea');
  inputText.value = '';
  console.log(inputList);
}

reset.addEventListener('click', resetForm);
