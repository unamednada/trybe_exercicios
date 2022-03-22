import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";

const biology = new Subject('Biology');

const student1 = new Student('Gustavo', new Date('1991-03-03'));
const student2 = new Student('Gabi', new Date('1989-08-12'));
const teacher1 = new Teacher('Barbosa', new Date('1954-05-25'), 12000, biology);

console.log(student1);
console.log(student2);
console.log(teacher1);
