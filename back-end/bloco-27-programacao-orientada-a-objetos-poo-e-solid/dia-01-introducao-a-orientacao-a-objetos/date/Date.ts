import Months from "./Months";

class MockDate {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const stringDate = `${year}-${month}-${day}`;

    if (isNaN(new Date(stringDate).getDate())) {
      day = 1;
      month = 1;
      year = 1990;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const month = Months[this._month];
    return month;
  }

  isLeapYear(): boolean {
    const firstCheck = this._year % 4 === 0;
    const secondCheck = this._year % 100 !== 0;
    const thirdCheck = this._year % 400 === 0;
    return (firstCheck && secondCheck) || thirdCheck;
  }
}

export default MockDate;
