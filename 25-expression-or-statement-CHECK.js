/** PROBLEM 25 - Expression or statement
 *
 * Define the type of each JavaScript construct:
 * - expression
 * - statement
 * - expression statement
 */

// expression statement
15;

// statement
const myObject = {
  // Object literal is expression
  x: 10,
  y: true,
};

// expression statement
myObject.z = 'abc'; // <-- expression

// expression statement
delete myObject.x;

// statement
let newVariable;

// expression statement
newVariable = 30 + 5; // <-- expression

// expression statement
console.log(newVariable);
/**             ^
 *          expression
 */

// statement
if (newVariable > 10) {
  /**       ^
   *    expression
   */

  // expression statement
  console.log(`${newVariable} больше 10`); // <-- newVariable is expression
  /**         _________________________
   *                      ^
   *                 expression
   */
}
