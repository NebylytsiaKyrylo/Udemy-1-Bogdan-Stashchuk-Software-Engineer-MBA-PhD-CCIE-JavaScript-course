/** TASK 79 - Enumeration of object properties
 *
 * 1. Create a "sumObjectValues" function that will sum
 * all property values that are numbers.
 *
 * 2. The sum of numbers must be returned from the function
 *
 * 3. Make sure you only iterate
 * by object's own properties
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

//1
const sumObjectValues = (obj) => Object.values(obj).reduce((acc, current) => typeof current === 'number' ? acc + current : acc, 0);

//2
/*
const sumObjectValues = (obj) => {
  let sumElement = 0;
  Object.values(obj).forEach((element) => {
    if (typeof element === 'number') {
      sumElement += element;
    }
  });
  return sumElement;
};
*/

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
