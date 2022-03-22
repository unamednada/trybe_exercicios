import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";
import Evaluation from './Evaluation';

export default class Student extends Person implements Enrollable {
  private _evaluations: Evaluation[] = [];
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

  get evaluations(): Evaluation[] {
    return this._evaluations;
  }

  set evaluations(value: Evaluation[]) {
    this._evaluations = value;
  }

  private gradeTotal(): number {
    const totalResults: number = this._evaluations.map(({ score }) => score).reduce((cur, acc) => cur + acc, 0);
    return totalResults;
  }

  public gradeAverage(): number {
    const resultsLength = this._evaluations.length;
    return this.gradeTotal() / resultsLength;
  }

  public addEvaluation(value: Evaluation): void {
    this._evaluations.push(value);
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) throw new Error('Enrollment must have at least 16 characters');
  }
}