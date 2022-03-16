import Student from "./Student";

const studentOne = new Student('20220001', 'Mark');
console.log(studentOne);

studentOne.examResults = [7, 8, 5, 5];
studentOne.paperResults = [10, 8];

console.log(studentOne);
console.log(studentOne.totalResults());
console.log(studentOne.average());