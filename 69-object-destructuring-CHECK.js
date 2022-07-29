/** TASK 69 - Destructuring Objects
 *
 * Create a "mult" function that will multiply
 * values of the x, y, z properties of the passed object
 *
 * Return the result of the multiplication from the function
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};

const mult = ({ x, y, z }) => x * y * z;

const result = mult(objectWithNumbers);
console.log(result);
// 300
