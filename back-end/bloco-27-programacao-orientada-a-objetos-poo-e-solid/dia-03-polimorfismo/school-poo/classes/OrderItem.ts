export default class OrderItem {
  private _name: string = String();
  private _price: number = Number();

  constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
  }

  get name(): string {
      return this._name;
  }

  set name(value: string) {
      if (value.length < 3) {
          throw new Error('Name must contain at least 3 characters');
      }

      this._name = value;
  }

  get price(): number {
      return this._price;
  }

  set price(value: number) {
      if (value < 0) throw new Error('Price can\'t be negative');

      this._price = value;
  }
};
