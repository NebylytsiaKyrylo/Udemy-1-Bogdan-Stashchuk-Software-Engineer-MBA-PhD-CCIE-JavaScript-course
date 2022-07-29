/** TASK 59 - Expanding Arrays
 *
 * 1. Create a new class "ExtendedArray" which should extend the built-in "Array"
 *
 * 2. Add two custom methods to the new class:
 * - "sum" - it should return the sum of all array elements
 * - "onlyNumbers" - must return a new array,
 * which will only contain numbers from the original array
 *
 * 3. Create multiple instances of the new "ExtendedArray" class
 * and test both "sum" and "onlyNumbers" methods.
 *
 * 4. Make sure the rest of the array methods are
 * like "forEach", "map" are also available
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, current) => sum + current, 0);
  }

  onlyNumbers() {
    return this.filter((element) => typeof element === 'number');
  }
}

const firstArray = new ExtendedArray(7, 7, 7);
const secondArray = new ExtendedArray(8, 8, 8, 'Kirill');

console.log(firstArray);
console.log(firstArray.sum());
console.log(secondArray);
console.log(secondArray.onlyNumbers());
