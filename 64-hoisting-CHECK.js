/** TASK 64 - Hoisting
  *
  * Change the code to fix the error after line 13.
  *
  * The error after line 21 should still be generated.
  * Why does the error occur after line 27?
  */

/*
if (b > a) {
  c = a + b + c
  let c = 2
  console.log(c)
}
*/

const a = 5;
const b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  console.log('result -', c);
  // 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
// because the variable c is defined locally in the 'if'
