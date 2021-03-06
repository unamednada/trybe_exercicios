import { Person, Student, Subject, Teacher } from "./system";

// const gustavo = new Person('Gustavo', new Date('1991-03-03'));
// console.log(gustavo.birthDate);
// console.log(gustavo.name);
// console.log(Person.getAge(gustavo.birthDate));

// const mariana = new Person('Mariana', new Date('1995-08-14'));
// console.log(mariana.name);
// console.log(Person.getAge(mariana.birthDate));

// const alice = new Student('Alice', new Date('1998-08-25'));
// console.log(alice.name);
// console.log(alice.enrollment);
// console.log(Person.getAge(alice.birthDate));

// const peterson = new Student('Peterson', new Date('1990-12-01'));
// console.log(peterson.enrollment);

// alice.examResults = [3, 5, 7];
// alice.paperResults = [8];

// console.log(alice.getAverage());

const maths = new Subject('Mathematics');
console.log(maths.name);

const thais = new Teacher('Thaís', new Date('1989-07-16'), 2500, maths);
console.log(thais.admissionDate);
console.log(thais.registration);
console.log(thais.salary);