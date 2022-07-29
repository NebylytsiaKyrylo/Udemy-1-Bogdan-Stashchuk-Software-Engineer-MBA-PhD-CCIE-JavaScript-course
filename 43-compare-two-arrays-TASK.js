/** TASK 43 - Comparing two arrays
 *
 * 1. Create a function "areArraysEqual" with two parameters "firstArray" and "secondArray"
 *
 * 2. Return "true" if two arrays are equal, namely:
 * - have the same number of elements
 * - all elements match, e.g. firstArray[0] === secondArray[0] etc.)
 *
 * 3. Otherwise return "false"
 *
 * IMPORTANT: Assume that arrays contain elements of primitive types
 */

const areArraysEqual = (firstArray, secondArray) => {
  if (firstArray.length === secondArray.length && firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }
  return false;
};

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
