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

const entries = Object.entries(order);
// console.log(entries);
let deliveryPerson = entries[3][1].delivery.deliveryPerson;
let client = order.name;
let phone = order.phoneNumber;
let address = entries[2][1];

const customerInfo = (order) => { 
  const result = `Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${phone}, R. ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`  
  console.log(result);
}
customerInfo(order);

const orderModifier = (order) => {
  client = 'Luiz Silva';
  const pedido = Object.keys(order.order.pizza);
  const beverage = entries[3][1].drinks.coke.type;
  order.payment.total = 50.58;
  const result2 = `Olá ${client}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${beverage} é R$ ${order.payment.total.toFixed(2)}.`

  console.log(result2);
}
orderModifier(order);

/*
1 Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
- Note que o parâmetro da função já está sendo passado na chamada da função.
2 Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- Modifique o nome da pessoa compradora.
- Modifique o valor total da compra para R$ 50,00.
*/