import MockDate from "./Date";

const today = new MockDate(16, 3, 2022);
console.log('Today object: ' + JSON.stringify(today));

console.log('This month: ' + today.getMonthName());
console.log('Is this year leap? ' + today.isLeapYear());

const tomorrow = new MockDate(17, 3, 2022);

console.log('Tomorrow object: ' + JSON.stringify(tomorrow));
console.log('Result -1 if ok: ' + today.compare(tomorrow));

console.log('Today format dd/mm/aaaa: ' + today.format('dd de M de aaaa'));