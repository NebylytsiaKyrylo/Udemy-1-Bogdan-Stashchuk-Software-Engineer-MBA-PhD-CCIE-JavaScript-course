/** TASK 71 - Spread Operator
 *
 * Using the "spread" operator, create a new array
 * The output in the console should be the same as at the end of the job
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 */

const a = [1, 2];
const b = [4, 5];
const c = [8, 9, 10];
const d = 11;

const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(combinedArray);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]