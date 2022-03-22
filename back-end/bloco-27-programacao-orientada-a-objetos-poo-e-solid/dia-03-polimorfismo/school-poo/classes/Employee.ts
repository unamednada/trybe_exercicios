import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable {
  private _salary: number = Number();
  private _admissionDate: Date = new Date();
  private _enrollment: string = String();

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this.validateSalary(salary);
    this._salary = salary;
    this._enrollment = this.generateEnrollment();
    this._admissionDate = new Date();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this.validateSalary(value);
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    this.validateAdmissionDate(value);
    this._admissionDate = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this.validateEnrollment(value);
    this._enrollment = value;
  }

  private validateSalary(value: number): void {
    if (value < 0) throw new Error('Salary can\'t be negative')
  }

  private validateAdmissionDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Admission date can\'t be in the future');
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) throw new Error('Enrollment must have at least 16 characters');
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `EMP${randomStr}`;
  }
};
