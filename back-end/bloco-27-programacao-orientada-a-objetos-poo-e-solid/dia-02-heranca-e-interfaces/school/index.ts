import { Person } from "./system";

const gustavo = new Person('Gustavo', new Date('1991-03-03'));
console.log(gustavo.birthDate);
console.log(gustavo.name);
console.log(Person.getAge(gustavo.birthDate));