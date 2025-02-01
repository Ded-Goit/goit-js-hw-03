`use strict`;
// country - a string containing the country of delivery
// price — the second parameter, a number containing the total cost of the product
// deliveryFee — the third parameter, a number containing the cost of delivering the product
// Add the function code so that it returns a string with a
// message about the delivery of the product to the user's country:
// "Shipping to <country> will cost <totalPrice> credits", where: • <country> is the country of delivery •
// <totalPrice> is the total cost of the order, which includes the cost of the product and its delivery
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
