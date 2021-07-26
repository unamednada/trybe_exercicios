const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const tel = order.phoneNumber;
  const [st, n, apt] = Object.values(order.address);
  const customerInfoString = `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${tel}, R. ${st}, N: ${n}, AP: ${apt}`;
  return customerInfoString;
}

// console.log(customerInfo(order));

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const customer = order.name;
  const [pizza1, pizza2] = Object.keys(order.order.pizza);
  const sideOrder = order.order.drinks.coke.type;
  const price = order.payment.total;
  const modifiedString = `Olá ${customer}, o total do seu pedido de ${pizza1}, ${pizza2} e ${sideOrder} é R$ ${price.toFixed(2)}.`;
  return modifiedString;
}

orderModifier(order);

console.log(orderModifier(order));