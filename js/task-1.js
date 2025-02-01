`use strict`;
// Declare a makeTransaction function that expects two parameters,
//  the values ​​of which will be set when it is called:
// • quantity— the first parameter, a number containing the number of droids ordered •
//  pricePerDroid — the second parameter, a number containing the cost of one droid
//Add the function code so that it returns a string with a message about the purchase of repair droids:
//  "You ordered <quantity> droids worth <totalPrice> credits!", where:
//  • <quantity> is the number of droids ordered •
// <totalPrice> is the total cost of the order, i.e. the cost of all ordered droids

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
