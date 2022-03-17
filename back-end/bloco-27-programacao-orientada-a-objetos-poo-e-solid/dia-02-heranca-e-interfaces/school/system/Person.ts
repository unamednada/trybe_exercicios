export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateBirthDate(birthDate);
    
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); 
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('Name must have at least 3 characters');
  }

  private validateBirthDate(birthDate: Date): void {
    const today: number = (new Date()).getTime();
    if (birthDate.getTime() > today) throw new Error('Birth date can\'t be in the future')
    const age = Person.getAge(birthDate);
    if (age > 120) throw new Error('Maximum age is 120 years old')
  }
}
