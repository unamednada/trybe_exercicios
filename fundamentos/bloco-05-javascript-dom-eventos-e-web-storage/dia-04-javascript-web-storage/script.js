let saveBtn = document.querySelector('#btn-preferences');
saveBtn.addEventListener('click', saveAllPreferences);

let preferenceArray = Array.from(document.getElementsByTagName('input'));

function saveAllPreferences() {
  for (let element of preferenceArray) {
    let value = document.querySelector(`#${element.id}`).value;
    localStorage.setItem(element.id, value);
  }
}

