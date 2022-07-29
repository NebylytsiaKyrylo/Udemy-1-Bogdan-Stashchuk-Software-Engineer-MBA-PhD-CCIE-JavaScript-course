/** TASK 55 - Destructuring the result of a function
 *
 * 1. Create a "minMax" function that takes any number of arguments
 *
 * 2. This function must return an array of two elements:
 * - The first element of the array is the minimum value among all arguments.
 * - The second element of the array is the maximum value among all arguments.
 */

const minMax = (...minMaxArray) => [
  Math.min(...minMaxArray),
  Math.max(...minMaxArray),
];

let min, max;
/* Call the "minMax" function here with arguments 24, 5, 34, 10
and using array destructuring assign values to "min" and "max" variables */
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

/* Call the "minMax" function here again with arguments 18, 23, 103, 70, 80, 25 */
[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103
