/** TASK 36 - Random Numbers
 *
 * 1. Generate a new 4 digit random number.
 * Range for random number 1000 - 9999.
 *
 * 2. Make sure this new random number doesn't match any of the numbers in the myNumbers array.
 *
 * 3. If it matches, you need to generate a new 4-digit number.
 *
 * 4. If there are no matches (the new number is unique), add it to the myNumbers array.
 *
 * IMPORTANT: In solving the problem, use the following functions:
 * - to generate a random number in a given range
 * - to add a random number to an array and return the modified array
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const generateNumbersFn = (min, max) => {
  let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return generatedNumber;
};

const myNumbersNewFn = (arr, min, max) => {
  let newRandomNumber;

  const myNumbersNew = [...arr];

  do {
    newRandomNumber = generateNumbersFn(min, max);
  } while (myNumbersNew.includes(newRandomNumber));

  myNumbersNew.push(newRandomNumber);
  return myNumbersNew;
};

const myNumbersNewArray = myNumbersNewFn(myNumbers, MIN, MAX);

console.log('ORIGINAL ARRAY', myNumbers);
console.log('NEW ARRAY', myNumbersNewArray);
