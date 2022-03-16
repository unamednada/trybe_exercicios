class Student {
  private _id: string;
  private _name: string;
  private _examResults: number[];
  private _paperResults: number[];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this._examResults = [];
    this._paperResults = [];
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name must have at least 3 characters')
    }
    this._name = value;
  }

  get examResults(): number[] {
    return this._examResults;
  }

  set examResults(value: number[]) {
    if (value.length > 4) {
      throw new Error('Student can\'t have more than 4 exam results')
    }
    this._examResults = value;
  }

  get paperResults(): number[] {
    return this._paperResults;
  }

  set paperResults(value: number[]) {
    if (value.length > 2) {
      throw new Error('Student can\'t have more than 2 paper results')
    }
    this._paperResults = value;
  }

  totalResults(): number {
    const allResults: number[] = [...this._examResults, ...this._paperResults];
    const total = allResults.reduce((cur, acc) => cur += acc, 0);
    return total;
  }
}

export default Student;
