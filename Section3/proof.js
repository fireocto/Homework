const pizzaToppings = ["pepperoni", "mushrooms", "red onions", "bacon"];

function greetCustomer(pizzaToppings) {
  let greeting = "Welcome to Pizza House, our toppings include: ";
  for (let name of pizzaToppings) {
    greeting += `${name}, `;
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  function preparePizza([size, crust, toppings]) {
    let pizza = {
      size: size,
      crust: crust,
      toppings: toppings
    };
    console.log("...cooking pizza...");
    function servePizza(pizza) {
      console.log(
        `Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}! Enjoy!`
      );
      return pizza;
    }
  }
}

greetCustomer(pizzaToppings);
getPizzaOrder("large", "thin", ["cheese", "pepperoni"]);
// preparePizza(getPizzaOrder("large", "thin", ["cheese", "pepperoni"]));
// servePizza(
//   preparePizza(getPizzaOrder("large", "thin", ["cheese", "pepperoni"]))
// );
