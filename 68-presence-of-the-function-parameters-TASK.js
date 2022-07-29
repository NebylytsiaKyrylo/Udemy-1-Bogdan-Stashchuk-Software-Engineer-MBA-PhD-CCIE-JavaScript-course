/** TASK 68 - Checking for Arguments in a Function Call
  *
  * Change the "square" function so that if it is called
  * without an argument, an error was generated
  * "The function "square" cannot be called without an argument"
  */

//1
// function square(a) {
//   if (typeof a === 'undefined') {
//     throw new Error('The function "square" cannot be called without an argument')
//   }
//   return console.log(a * a)
// }

//2
// function square(a) {
//   if (a === undefined) {
//     throw new Error('The function "square" cannot be called without an argument')
//   }
//   return console.log(a * a)
// }

//3
function square(a) {
  if (arguments.length === 0) {
    throw new Error('The function "square" cannot be called without an argument');
  }
  return console.log(a * a);
}

square(10);
// 100

square();
// Uncaught Error: The function "square" cannot be called without an argument
