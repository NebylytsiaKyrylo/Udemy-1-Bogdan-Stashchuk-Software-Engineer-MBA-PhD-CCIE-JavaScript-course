/** TASK 10 - Comment before function
 *
 * 1. Declare a function with two parameters whose values are numbers
 *
 * 2. This function must return the difference between the first and second parameter
 *
 * 3. Add a multi-line comment before the function:
 * - Text of the comment "Returns the difference of two numbers"
 * - Specify the type of parameters - number
 * - Specify the return type - number
 * - Describe the return value - "Number difference"
 *
 * 4. Call a function
 */

/**
 * Returns the difference of two numbers
 * @param {number} a - enter number 1
 * @param {number} b - enter number 2
 * @returns {number} - as a result, the function will return a number
 * @description Difference between a and b
 */

function myFn(a, b) {
  return a - b;
}

const resMyFn = myFn();
console.log(resMyFn);
