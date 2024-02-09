function greetCustomer() {
  console.log(`Welcome to Pizza House, our toppings are: `);
}

const pizzaToppings = ["pepperoni", "mushrooms", "red onions", "bacon"];
for (let name of pizzaToppings) {
  console.log(name);
}

greetCustomer(pizzaToppings);

// for (let topping in toppings) {
//   console.log()
// }
// greetCustomer()


// function getPizzaOrder(size, crust, ...toppings) {
//   console.log(`One `)
// }

// getPizzaOrder("large", "thick", [pizzaToppings]);
