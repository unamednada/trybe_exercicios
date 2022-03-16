class Customer {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('Name must have at least 3 characters')
    this._name = value;
  }
}

export default Customer;
