import Customer from "./Customer";
import Product from "./Product";

class Order {
  private _customer: Customer;
  private _items: Product[];
  private _payment: string;
  private _discount: number;

  constructor(customer: Customer, items: Product[], payment: string, discount: number) {
    this._customer = customer;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get items(): Product[] {
    return this._items;
  }

  set items(value: Product[]) {
    if (value.length < 1) throw new Error('Order must have at least one item')
    this._items = value;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(value: string) {
    this._payment = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) throw new Error('Discount can\t be negative')
    this._discount = value;
  }
}

export default Order;
