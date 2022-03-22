import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";
import EvaluationResult from './EvaluationResult';

export default class Student extends Person implements Enrollable {
  private _evaluationResults: EvaluationResult[];
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

  get exvaluationResults(): EvaluationResult[] {
    return this._evaluationResults;
  }

  set evaluationResults(value: EvaluationResult[]) {
    this._evaluationResults = value;
  }

  private gradeTotal(): number {
    const totalResults: number = this._evaluationResults.map(({ score }) => score).reduce((cur, acc) => cur + acc, 0);
    return totalResults;
  }

  private gradeAverage(): number {
    const resultsLength = this._evaluationResults.length;
    return this.gradeTotal() / resultsLength;
  }

  private addEvaluationResult(value: EvaluationResult): void {
    this._evaluationResults.push(value);
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) throw new Error('Enrollment must have at least 16 characters');
  }
}