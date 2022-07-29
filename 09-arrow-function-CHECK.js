/** TASK 9 - Arrow function
 *
 * 1. Declare a variable and assign an arrow function to it
 *
 * 2. The function must not have parameters
 *
 * 3. Explicitly return the string "Hello world!"
 *
 * 4. Call the function and print the result to the console
 *
 * 5. Rewrite the function so that the result is returned implicitly
 */

//1
const kir = () => {
  return 'Hello world!';
};

console.log(kir());

//2
const kir2 = () => 'Hello world!';

console.log(kir2());
