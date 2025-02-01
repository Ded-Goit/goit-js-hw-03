`use strict`;
// Declare a function getElementWidth that expects three parameters, the values ​​of which will be set when it is called:
//  • content — first parameter, content width
//  • padding — second parameter, horizontal padding value for each side
//  • border — the third parameter, the border thickness value for each side
//  The values ​​of all parameters will be strings of the format Npx where N is an arbitrary number, integer or fractional.
// Complete the function code so that it returns a number — the total width of the element.
//  When calculating the total width, consider that the box-sizing value is equal to border-box.
function getElementWidth(content, padding, border) {
  const contentNpx = parseFloat(content);
  const paddingNpx = parseFloat(padding);
  const borderNpx = parseFloat(border);
  return contentNpx + paddingNpx * 2 + borderNpx * 2;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
