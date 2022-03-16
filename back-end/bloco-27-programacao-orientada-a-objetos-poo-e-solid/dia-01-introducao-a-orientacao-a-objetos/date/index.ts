import MockDate from "./Date";

const today = new MockDate(16, 3, 2022);
console.log(today);

console.log(today.getMonthName());
console.log(today.isLeapYear());