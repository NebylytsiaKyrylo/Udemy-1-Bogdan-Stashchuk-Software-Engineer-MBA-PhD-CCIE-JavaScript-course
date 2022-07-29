/** TASK 76 - Swap the values of two variables
 *
 * Swap the values of the variables "a" and "b".
 * Do not use any new variables for this.
 */

let a = 'first';
let b = 'second';

console.log(a, b);
// first second

[a, b] = [b, a];

console.log(a, b);
// second first
