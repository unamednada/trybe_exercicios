import Customer from "./Customer";
import Order from "./Order";
import Product from "./Product";

const customer = new Customer('Mark');
const soda = new Product('Coca-cola', 7);
const butterBread = new Product('Bread and butter', 2);

const markOrder = new Order(customer, [soda, butterBread], 'cash', .1);
console.log(markOrder);