/** TASK 14 - A string in capital letters
 *
 * 1. Create a variable and assign any string to it
 *
 * 2. Make sure the value of this variable is NOT a String instance
 * Use the "instanceof" operator for this
 *
 * 3. Make sure the value of this variable is of type "string"
 *
 * 4. Create another variable and its value must be the value
 * first variable in capital letters
 *
 * 5. Print the value of the second variable to the console
 */

const myVar = 'snowboarding';

console.log(myVar instanceof String);

console.log(typeof myVar);

const myVar2 = myVar.toUpperCase();

console.log(myVar2);
