/** TASK 50 - Template Strings
 *
 * 1. Create a function "templateLiteral" with one parameter "num"
 *
 * 2. The function must return a multiline string.
 *
 * 3. Below are examples of function calls.
 */

const templateLiteral = (num) =>
`Number ${num}.
This number is ${num < 10 ? 'less than 10' : 'greater or equal than 10'}.
The square root of this number is ${Math.sqrt(num)}`;

// TEST 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/*
Number 9.
This number is less than 10.
The square root of this number is 3.
*/

// TEST 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/*
Number 25.
This number is greater or equal than 10.
The square root of this number is 5.
*/
