import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
  private _examResults: number[] = [];
  private _paperResults: number[] = [];
  private _enrollment: string = String();

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this.validateEnrollment(value);
    this._enrollment = value;
  }

  get examResults(): number[] {
    return this._examResults;
  }

  set examResults(value: number[]) {
    this.validateResults(value, 4);
    this._examResults = value;
  }

  get paperResults(): number[] {
    return this._paperResults;
  }

  set paperResults(value: number[]) {
    this.validateResults(value, 2);
    this._paperResults = value;
  }

  private gradeTotal(): number {
    const totalExam: number = this._examResults.reduce((cur, acc) => cur + acc, 0);
    const totalPaper: number = this._paperResults.reduce((cur, acc) => cur + acc, 0);
    return totalExam + totalPaper;
  }

  private gradeAverage(): number {
    const examN = this._examResults.length;
    const paperN = this._paperResults.length;
    return this.gradeTotal() / (examN + paperN);
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) throw new Error('Enrollment must have at least 16 characters');
  }

  private validateResults(value: number[], max: number): void {
    if (value.length > max) throw new Error(`This results array can\'t have more than ${max} values`)
  }
}