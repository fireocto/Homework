const list = ["jordan", "matt", "sarah"]

function getNames(names) {
  for(let name of names) {
    console.log(name);
  }
}

getNames(list);
function greetCustomer(pizzaToppings) {
  for (let name of pizzaToppings) {
    console.log(name);
  }
  return "Welcome to Pizza House, our toppings include: " + name;
}

const pizzaToppings = ["pepperoni", "mushrooms", "red onions", "bacon"];

greetCustomer(pizzaToppings);





for (let topping in toppings) {
  console.log()
}
greetCustomer()


function getPizzaOrder(size, crust, ...toppings) {

}



getPizzaOrder("large", "thick", [pizzaToppings]);

let

function preparePizza() {

}
function getPizzaOrder(size, crust, ...toppings) {
  let details = size, crust, toppings[pizzaToppings];
  for(let name of details) {
    order += `One ${size}, ${crust} crust pizza with ${toppings} coming up!`;
  }
  console.log(order);
}

getPizzaOrder(pizzaSpecial);

// Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["pepperoni", "mushrooms", "red onions", "bacon"];

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them
//  of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet
//  , i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer(toppings) {
  let greeting = "Welcome to Pizza House, our toppings include: ";
  for (let name of toppings) {
    greeting += `${name}, `;
  }
console.log(greeting);
}
greetCustomer(pizzaToppings);


// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs

// const pizzaOrder = {
//   size: "large",
//   crust: "thin",
//   toppings: [
//     "pepperoni",
//     "mushrooms"
//   ]
// }

let size = "large";
let crust = "thin";
let toppings = ["cheese"];

const pizzaOrder = {size, crust, toppings};

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  return [size, crust, toppings];
}

getPizzaOrder(pizzaOrder);

// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

// pizza object
// const pizzaSpecial = {
//   size: "large",
//   crust: "thin",
//   toppings: [
//     "pepperoni",
//     "sausage",
//     "onions",
//     "mushrooms",
//     "anchovies"
//   ]
// }

function preparePizza() {
  let update = "...Cooking pizza...";
  for(let name of details) {
    update += `One ${name[0]}, ${name[1]} crust pizza with ${[pizzaToppings]} coming up!';
  }
  console.log("...Cooking pizza...");

}
const pizzaDetails = ["large", "thin", ...pizzaToppings];
for(let )

for (i=0; i < arrayLength; i++) {
  console.log();
}



preparePizza();






// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e.
// "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the
// returned value from the previous function as its input

function servePizza() {
  console.log();
}


// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently
// employing string coercion when constructing template literals. The primary objective of this
// exercise is to provide you with an opportunity to hone your skills in array traversal. Focus on
// utilizing while, for, and for...of loops to transform the array of toppings into the required output strings.

// The following is not an acceptable solution for Week 3 homework:
// let pizzaToppings = [" peperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings});
// After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.


// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers,
// One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking...
// Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!




let scores = [24, 32, 17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

for(i = 0; i < arrayLength; i++) {
  roundNumber = (i + 1);
  msg += 'Round' + roundNumber + ': ';
  msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
