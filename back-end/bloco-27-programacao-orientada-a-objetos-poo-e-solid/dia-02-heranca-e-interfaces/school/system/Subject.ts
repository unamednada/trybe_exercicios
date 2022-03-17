export default class Subject {
  private _name: string = String();
  constructor(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(name: string) {
    if (name.length < 3) throw new Error('Name must have at least 3 characters')
  }
}
