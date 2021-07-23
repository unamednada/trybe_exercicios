const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const modifyLesson = (lesson, key, value) => {
  lesson[key] = value;
}

// console.table(lesson2);

// modifyLesson(lesson2, 'turno', 'manhã');

// console.table(lesson2);

const obviousKeys = object => Object.keys(object);

// console.log(obviousKeys(lesson1));

// const sizeObject = object => obviousKeys(object).length;

// console.log(sizeObject(lesson1));

const obviousValues = object => Object.values(object);

// console.log(obviousValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

let totalEstudantes = 0;

for (let object in allLessons) {
  totalEstudantes += allLessons[object].numeroEstudantes;
}

// console.log(totalEstudantes);

const getKeyPosition = (object, position) => {
  keys = obviousValues(object);
  return keys[position];
}

console.log(getKeyPosition(lesson1, 0));

const isPair = (object, key, value) => obviousKeys(object).indexOf(key) === obviousValues(object).indexOf(value);

console.log(isPair(lesson3, 'turno', 'noite'));
console.log(isPair(lesson3, 'materia', 'Maria Clara'));