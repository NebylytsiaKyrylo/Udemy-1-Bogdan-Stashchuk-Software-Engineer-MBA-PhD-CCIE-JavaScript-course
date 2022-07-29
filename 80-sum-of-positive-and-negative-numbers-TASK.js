/** TASK 80 - The sum of positive and negative numbers
 *
 * 1. Create a "sumPositiveNegative" function that takes an array
 * and sums separately positive and negative numbers.
 *
 * 2. The function must return an object like this:
 * {
 * positive: 74, // sum of all positive numbers
 * negative: -54 // sum of all negative numbers
 *}
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

const sumPositiveNegative = (arr) => {
  let positive = 0;
  let negative = 0;

  arr.forEach(element => element > 0 ? positive += element : negative += element);

  return {
    positive,
    negative,
  };
};

/*
const sumPositiveNegative = (arr) =>
  arr.reduce((result, element) => element > 0
        ? { ...result, positive: result.positive += element }
        : { ...result, negative: result.negative += element },
    { positive: 0, negative: 0 });
*/

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
