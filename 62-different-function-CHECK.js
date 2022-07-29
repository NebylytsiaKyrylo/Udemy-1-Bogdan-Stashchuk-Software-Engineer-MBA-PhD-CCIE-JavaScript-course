/** TASK 62 - Differences in function declarations
 *
 * 1. Explain the difference between the two options for declaring functions
 *
 *2. Show this difference by adding extra code below functions
 *
 * 3. Also call both functions
 */

// Function can be called before declaration
// console.log(firstFunction(2, 3))

function firstFunction(a, b) {
  return a + b;
}

// We can assign new value
// firstFunction = '123'
// console.log(firstFunction)

// Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)

const secondFunction = function (a, b) {
  return a + b;
};

// New value can't be assigned
// secondFunction = true

console.log(firstFunction(2, 5));
console.log(secondFunction(5, 10));
