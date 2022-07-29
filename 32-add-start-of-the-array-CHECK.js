/** TASK 32 - Adding elements to the beginning of an array
 *
 * 1. Add elements to the beginning of the array:
 * - first string "Hello"
 * - then the number 100
 *
 * 2. Print the length of the resulting array to the console
 */

const myArray = [true, null];

myArray.unshift('Hello');
myArray.unshift(100);
console.log(myArray.length);

console.log(myArray); // [100, "Hello", true, null]
