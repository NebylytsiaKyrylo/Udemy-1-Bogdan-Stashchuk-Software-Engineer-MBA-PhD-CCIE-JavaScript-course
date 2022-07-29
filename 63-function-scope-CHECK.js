/** TASK 63 - Function Scope
 *
 * What will be output to the console?
 * Answer the question without running the code
 */

const b = 2;
let d = 15;

function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d);
}

myFn1();

// a - undefined, b - 2, c - 5, d - 15
