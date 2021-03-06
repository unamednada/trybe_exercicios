import OrderItem from "./OrderItem";
import Person from "./Person";

export default class Order {
  private _id: number = Number();
  private _createdAt: Date = new Date();
  private _client: Person;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;
  static orders: number = 0;

  constructor(client: Person, items: OrderItem[], paymentMethod: string, discount: number) {
    this._id = Order.orders;
    this._createdAt = new Date();
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
    Order.orders += 1;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
        throw new Error('Order must have at least 1 item');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
        throw new Error('Discount can\'t be negative');
    }

    this._discount = value;
  }

  get totalOrder(): number {
    return this._items.map(({ price }) => price).reduce((cur, acc) => cur + acc, 0);
  }

  get totalWithDiscount(): number {
    const total: number = this.totalOrder;
    return total * this._discount;
  }
};
