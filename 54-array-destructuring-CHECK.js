/** TASK 54 - Array Destructuring
 *
 * Change the parameter section in the "processQuantities" function so that
 * to match the outputs in the console
 *
 * Use array destructuring
 */

/*
const processQuantities = (parameters) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 10 in the first call, 0 in the second call
  return defaultQty + maxQty - minQty;
};
*/

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 10 in the first call, 0 in the second call
  return defaultQty + maxQty - minQty;
};

const inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

const inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21
