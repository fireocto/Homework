let pizzaPlace = "Joey's House of Pizza";
let numberOfToppings = 10;

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}! Customize your own pie with any of our ${numberOfToppings} toppings!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// let x = 1;

// while (x <= 8) {
//   console.log(x);
//   x = x + 1;
// }

for (let x = 0; x <= 10; x += 2) {
  console.log(x);
}
