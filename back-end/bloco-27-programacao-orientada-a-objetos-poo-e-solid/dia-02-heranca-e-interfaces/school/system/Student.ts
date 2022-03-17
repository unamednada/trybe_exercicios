import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string = String();
  private _examResults: number[] = [];
  private _paperResults: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = Student.generateEnrollment(name, birthDate);
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('Enrollment must have at least 16 characters')
    this._enrollment = value;
  }

  get examResults(): number[] {
    return this._examResults;
  }

  set examResults(value: number[]) {
    if (value.length > 4) throw new Error('Student can\'t have more than 4 exam results')
    this._examResults = value;
  }

  get paperResults(): number[] {
    return this._paperResults;
  }

  set paperResults(value: number[]) {
    if (value.length > 2) throw new Error('Student can\'t have more than 2 paper results')
    this._paperResults = value;
  }

  public getAverage(): number {
    const examTotal: number = Student.getResultsTotal(this._examResults);
    const paperTotal: number = Student.getResultsTotal(this._paperResults);
    return Math.round((examTotal + paperTotal) / 6);
  }

  static getResultsTotal(results: number[]): number {
    return results.reduce((cur, acc) => cur += acc, 0);
  }

  static generateEnrollment(name: string, birthDate: Date): string {
    let enrollment: string = String();
    const stringDate: string = birthDate.toString();

    for (let i = 0; i < name.length - 1 && i < stringDate.length - 1; i += 1) {
      let char = name.charAt(i) !== ' ' ? name.charCodeAt(i) : 'Z';
      enrollment += char;
      let dateChar = stringDate.charAt(i) !== ' ' ? stringDate.charCodeAt(i) : 'Z';
      enrollment += dateChar;
    }

    while (enrollment.length < 16) enrollment += '0';

    return enrollment.substring(0, 16);
  }
}