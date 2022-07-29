/** TASK 70 - Array destructuring and the "rest" operator
 *
 * Assign variables "a", "b", and "c" values using
 * array destructuring and "rest" operator
 *
 * Variable values must be the same as in the output in the console
 */

const arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
