/** TASK 27 - Const
 *
 * Answer the following questions:
 * 1. Why is there no error after line 13?
 * 2. Why is a TypeError thrown after line 18?
 *
 * Change one line of code to make this error go away.
 * Do not change lines 13, 18
 */

let arr = [1, 2]; // <-- Variable declaration using const arr = [1, 2]

arr.push(3); //1. because we are changing the array, not the variable itself

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError: Assignment to constant variable.
// AFTER: No error  - i replaced it with let

console.log(arr);
// [1, 2, 3, 4]
