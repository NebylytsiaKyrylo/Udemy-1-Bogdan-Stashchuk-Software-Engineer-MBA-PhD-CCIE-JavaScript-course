/** TASK 46 - Adding Unique Elements to an Array
 *
 * 1. Create a "pushIfUnique" function with two parameters "inputArray" and "newElement"
 *
 * 2. If "inputArray" already contains "newElement",
 * print to the console "{newElement} is already in the array"
 *
 * 3. Otherwise add "newElement" to "inputArray"
 *
 *NOTE: We assume that "inputArray" contains elements of primitive types only
 */

const pushIfUnique = (inputArray, newElement) => {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} is already in the array`);
  }
  return inputArray.push(newElement);
};

const myNumbers = [123, 50, 27];

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 is already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
