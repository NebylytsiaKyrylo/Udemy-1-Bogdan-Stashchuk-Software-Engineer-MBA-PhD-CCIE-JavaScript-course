/** TASK 20 - Date
 *
 * 1. Create a variable and assign it the current time in milliseconds
 *
 * 2. Print the value to the console
 */

const currentDate = new Date();
console.log(currentDate);

const currentDateInMs = currentDate.getTime();
console.log(currentDateInMs);

//for myself, tests of other options
const currentDay = currentDate.getDay();
console.log(currentDay);

const fullYear = currentDate.getFullYear();
console.log(fullYear);

const currentMonth = currentDate.getMonth();
console.log(currentDay);
