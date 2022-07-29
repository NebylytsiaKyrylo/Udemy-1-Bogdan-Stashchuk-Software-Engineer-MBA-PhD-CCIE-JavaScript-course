/** TASK 18 - Iterating over array elements
 *
 * 1. Create an array with multiple elements
 *
 * 2. Using one of the array methods, loop through all the elements
 * and output each item to the console
 */

//1 implicit inference
const myArray1 = ['Kirill', 7, true];

myArray1.forEach((el) => console.log(el));

//2 explicit inference
const myArray2 = ['Kirill', 7, true];

myArray2.forEach((element) => {
  console.log(element);
});
