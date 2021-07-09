let saveBtn = document.querySelector('#btn-preferences');
saveBtn.addEventListener('click', saveAllPreferences);
saveBtn.addEventListener('click', setPreferences);

let preferenceArray = Array.from(document.getElementsByTagName('input'));

function saveAllPreferences() {
  for (let element of preferenceArray) {
    let value = document.querySelector(`#${element.id}`).value;
    localStorage.setItem(element.id, value);
  }
}

function setPreferences() {
  let body = document.querySelector('body');
  body.style.backgroundColor = localStorage.getItem('bGColor');
  body.style.color = localStorage.getItem('textColor');
  body.style.fontSize = localStorage.getItem('textSize');
  body.style.lineSpacing = localStorage.getItem('textSpacing');
  body.style.fontFamily = localStorage.getItem('fontType');
}

window.onload = setPreferences;