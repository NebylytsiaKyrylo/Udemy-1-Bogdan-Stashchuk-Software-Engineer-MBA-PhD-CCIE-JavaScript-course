/** TASK 44 - Finding elements of primitive types in an array
  *
  * 1. Create a function isElementInArray with two parameters "inputArray" and "searchElement"
  *
  * 2. If "searchElement" is found in "inputArray" - return "true"
  *
  * 3. Otherwise, return "false"
  */

const isElementInArray = (inputArray, searchElement) => {
  return inputArray.includes(searchElement);
};

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true
