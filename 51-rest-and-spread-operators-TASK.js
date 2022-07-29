/** TASK 51 - Operators "rest" (remainder) and "spread" (spread)
 *
 * 1. Create a "meanScore" function,
 * which will take any number of arguments,
 * merge them into one array and return the average of all arguments,
 * rounded to 2 decimal places.
 *
 * 2. If at least one element in this array is not a number -
 * output the following error to the console:
 * "All arguments in a function call must be numbers!"
 *
 * In this task, you must use "rest" as the operator,
 * and the "spread" operator.
 */

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];

const meanScore = (...scores) => {
  if (scores.some((element) => typeof element !== 'number')) {
    return console.error('All arguments in a function call must be numbers!');
  }
  return scores
    .reduce((sum, current) => sum + current / scores.length, 0)
    .toFixed(2);
};

// console.log(meanScore(all elements from the array "scores1"))
console.log(meanScore(...scores1));
// 1.93

// console.log(meanScore(all elements from the arrays "scores1", "scores2"))
console.log(meanScore(...scores1, ...scores2));
// 2.8

// console.log(meanScore(all elements from the arrays "scores1", "scores2", "scores3"))
console.log(meanScore(...scores1, ...scores2, ...scores3));
// 2.59

// console.log(meanScore(all elements from the array "scores4"))
console.log(meanScore(...scores4));
// All arguments in a function call must be numbers!
