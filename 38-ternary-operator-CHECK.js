/** TASK 38 - Ternary operator
 *
 * 1. Rewrite the "if .. else" statement without using "else"
 *
 * 2. Rewrite function content using ternary operator
 *
 * 3. Replace normal function with arrow function
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Array is not empty';
  } else {
    return 'Array is empty';
  }
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// 1. Rewrite the "if .. else" statement without using "else"

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Array is not empty';
  }
  return 'Array is empty';
}

//2. Rewrite function content using ternary operator
function isArrayEmpty(inputArray) {
  return inputArray.length > 0 ? 'Array is not empty' : 'Array is empty';
}

//3. Replace normal function with arrow function
const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? 'Array is empty' : 'Array is not empty';
