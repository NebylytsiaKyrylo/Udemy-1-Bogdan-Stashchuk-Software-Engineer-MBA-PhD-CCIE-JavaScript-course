/** TASK 61 - Sum of numbers
 *
 * 1. Create a "sumNumbers" function that will sum up all the arguments passed to it.
 * Number of arguments unknown
 *
 * 2. Use console.log inside a function to output the result
 *
 * 3. Also return this sum as the result of the function
 */

const sumNumbers = (...arr) => {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return console.log(sum);
};

sumNumbers(1, 3);
// 4

sumNumbers(10, 20, 5);
// 35

sumNumbers(2, 5, 80, 1, 10, 12);
// 110
