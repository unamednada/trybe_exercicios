function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDays() {
  let daysList = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let day of dezDaysList) {
    let weekDay = document.createElement('li');
    weekDay.innerText = day;
    weekDay.classList.add('day');
    if ([24, 25, 31].includes(day)) {
      weekDay.classList.add('holiday');
    }
    if ([4, 11, 18, 25].includes(day)) {
      weekDay.classList.add('friday');
    }
    daysList.appendChild(weekDay);
  }
}

createDays();

function createHolidayButton(str) {
  let buttonFather = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = str;
  buttonFather.appendChild(button);
  return button;
}

let button = createHolidayButton('Feriados');

button.addEventListener('click', changeHolidayColor);

function changeHolidayColor() {
  let holidayArray = Array.from(document.querySelectorAll('.holiday'));
  for (let holy of holidayArray) {
    if (holy.style.backgroundColor === 'green') {
      holy.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holy.style.backgroundColor = 'green';
    } 
  }
  if (button.style.color === 'green') {
    button.style.color = '#777';
  } else {
    button.style.color = 'green';
  }
}
  
function createFridayButton(str) {
  let buttonFather = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = str;
  buttonFather.appendChild(button);
  return button;
}

let buttonFri = createFridayButton('Sexta-feira');

buttonFri.addEventListener('click', changeFridayText);

function changeFridayText() {
  let fridayArray = Array.from(document.querySelectorAll('.friday'));
  console.log(fridayArray);
  for (let i = 0; i < fridayArray.length; i += 1) {
    let numberDay = 4 + 7 * i;
    if (fridayArray[i].innerText === 'HAPPY HOUR DAY!') {
      fridayArray[i].innerText = numberDay;
    } else {
      fridayArray[i].innerText = 'HAPPY HOUR DAY!';
    } 
  }
  if (buttonFri.style.color === 'red') {
    buttonFri.style.color = '#777';
  } else {
    buttonFri.style.color = 'red';
  }
}

let daysArray = Array.from(document.querySelectorAll('.day'));
console.log(daysArray);
for (let day of daysArray) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseleave', zoomOut);
}

function zoomOut(currentDay) {
  currentDay.target.style.fontSize = '20px';
}

function zoomIn(currentDay) {
  currentDay.target.style.fontSize = '26px';
}

