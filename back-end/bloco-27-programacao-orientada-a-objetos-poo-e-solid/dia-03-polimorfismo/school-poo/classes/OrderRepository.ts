import Order from "./Order";
import Person from "./Person";

export default class OrderRepository {
  private _orders: Order[] = [];

  public addOrder(value: Order): void {
    this._orders.push(value);
  }

  public removeOrder(value: Order): void {
    this._orders.splice(this._orders.indexOf(value), 1);
  }

  public listByClient(value: Person): Order[] {
    return this._orders.filter(({ client }) => client === value);
  }

  public listBySortedPrice(value: string): Order[] {
    const sortedOrders: Order[] = this._orders;
    
    if (value === '<') sortedOrders.sort((a, b) => a.totalOrder - b.totalOrder);
    else if (value === '>') sortedOrders.sort((a, b) => b.totalOrder - a.totalOrder);
    return sortedOrders;
  }
}