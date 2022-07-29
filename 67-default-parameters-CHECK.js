/** TASK 67 - Default Function Parameters
 *
 * 1. Answer the following question:
 * - Why can't we just use the OR operator on line 12?
 * mult = mult || 2
 *
 *2. Rewrite function using default value
 * for mult parameter in "multiplyBy"
 */

/*
function multiplyBy(a, mult) {
  mult = mult !== undefined ? mult : 2;
  console.log(a * mult);
}
*/

const multiplyBy = (a, mult = 2) => console.log(a * mult);

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50
