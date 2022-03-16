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

  compare(value: MockDate): number {
    const compareDate = new Date(`${value.year}-${value.month}-${value.day}`);
    const thisDate = new Date(`${this._year}-${this._month}-${this._day}`);

    if (thisDate > compareDate) return 1;
    if (thisDate < compareDate) return -1;
    return 0;
  }

  format(value: string): string {
    const formatCheck: boolean[] = [
      (!value.match(/a{2,4}/g)), 
      (!value.match(/m{2}/g) && !value.match(/M{1}/g)), 
      (!value.match(/d{2}/g)) 
    ]

    if (formatCheck.some(check => check)) throw new Error('Invalid format: ' + value);

    const day = this._day > 9 ? this._day.toString() : `0${this._day}`;
    const month = this._month > 9 ? this._month.toString() : `0${this._month}`;
    const year = this._year.toString();

    const formattedDate = value
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substring(-2));
    
    return formattedDate;
  }
}

export default MockDate;
