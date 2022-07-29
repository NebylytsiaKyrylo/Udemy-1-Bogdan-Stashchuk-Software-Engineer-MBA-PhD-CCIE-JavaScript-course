/** TASK 65 - Ternary operator
 *
 * Modify "isNumber" function using ternary operator
 */

/*
function isNumber(a) {
  if (typeof a === 'number') {
    return `${a} - this number`
  } else {
    return `${a} - it's not a number`
  }
}
*/

function isNumber(a) {
  return typeof a === 'number'
    ? `${a} - this number`
    : `${a} - it's not a number`;
}

/*
const isNumber = (a) =>
  typeof a === 'number' ? `${a} - this number` : `${a} - it's not a number`;
*/

console.log(isNumber(10));
// 10 - this number

console.log(isNumber('Hello'));
// Hello - it's not a number

console.log(isNumber(true));
// true - it's not a number
