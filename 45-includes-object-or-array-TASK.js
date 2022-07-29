/** TASK 45 - Finding elements in arrays
 *
 * 1. Create a function isElementInArray with two parameters "searchElement" and "inputArray"
 *
 * 2. If "searchElement" is not an object, just use the "includes" method
 *
 * 3. If "searchElement" is an object or an array,
 * you need to first convert each element of "inputArray" to a string,
 * and then apply the "includes" method with an argument that will also be converted to a string
 */

function isElementInArray(searchElement, inputArray) {
  if (typeof searchElement !== 'object') {
    return inputArray.includes(searchElement);
  }

  return inputArray
    .map((element) => JSON.stringify(element))
    .includes(JSON.stringify(searchElement));
}

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
];

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
];

const primitiveTypesArray = [25, 'x', true, undefined, null];

console.log(isElementInArray(['css', 'flexbox'], tags)); // true

console.log(isElementInArray(['flexbox', 'css'], tags)); // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)); // true

console.log(isElementInArray({ title: 'Banana' }, fruits)); // false

console.log(isElementInArray(25, primitiveTypesArray)); // true
