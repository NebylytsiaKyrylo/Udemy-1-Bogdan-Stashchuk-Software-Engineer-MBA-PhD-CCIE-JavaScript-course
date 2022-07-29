/** TASK 8 - Assigning a Function to a Variable
 *
 * 1. Declare a variable and assign it a function expression
 *
 * 2. The function must have one parameter "name"
 *
 * 3. Return the string "Hello, <name>" from the function
 *
 * 4. Call the function twice with different arguments
 *
 * 5. Output the result of function calls to the console
 */

const kir = function (name) {
  return console.log(`Привет, ${name}`);
};

kir('Kirill');
kir('Gleb');
