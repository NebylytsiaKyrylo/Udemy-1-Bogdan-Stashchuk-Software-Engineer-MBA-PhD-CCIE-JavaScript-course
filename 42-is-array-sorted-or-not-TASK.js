/** TASK 42 - Checking array sorting
 *
 * 1. Create a function "arraySortInfo" with one parameter - "inputArray"
 *
 * 2. If at least one element in the array is not a number - return "Some elements are not numbers"
 *
 * 3. If the numbers in the array are sorted in ascending order, return "The array is sorted in ascending order"
 *
 * 4. If the numbers in the array are sorted in descending order, return "The array is sorted in descending order".
 *
 * 5. If the array is not sorted, return "The array is not sorted"
 */

const arraySortInfo = (inputArray) => {
  if (inputArray.some((element) => typeof element !== 'number')) {
    return console.log('Some elements are not numbers');
  }

  if (inputArray.every((element, index) => index > 0 ? element >= inputArray[index - 1] : true)) {
    return console.log('The array is sorted in ascending order');
  }

  if (inputArray.every((element, index) => index > 0 ? element <= inputArray[index - 1] : true)) {
    return console.log('The array is sorted in descending order');
  }

  return console.log('The array is not sorted');
};

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

console.log(arraySortInfo(a)); // Some elements are not numbers
console.log(arraySortInfo(b)); // The array is sorted in ascending order
console.log(arraySortInfo(c)); // The array is sorted in descending order
console.log(arraySortInfo(d)); // The array is not sorted
