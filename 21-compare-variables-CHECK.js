/** TASK 21 - Comparing Variables
 *
 * 1. Compare 2 variables "myVariable1" and "myVariable2".
 * Print "true" to the console if the value of "myVariable1" is less than or equal to "myVariable2".
 *
 * 2. Convert both variables to numbers before comparing.
 */

let myVariable1 = 10;
let myVariable2 = '5';

// To explicitly convert to a number, you can use + or Number(). If the string is not exactly a number, then the result will be NaN:

//1 variant
console.log(Number(myVariable1) <= Number(myVariable1));


//2 variant
console.log(+myVariable1 <= +myVariable2);

//3 variant
// In real life, we often encounter values that have a unit, like "100px" or "12pt" in CSS. Also, in many countries, the currency symbol is written after the "19€" denomination. So how do we get a numeric value from such strings?
// There is parseInt and parseFloat for this.
// They "read" a number from a string. If an error occurs during the read, they return the number received before the error. The parseInt function returns an integer, while parseFloat returns a floating point number:

console.log(parseInt(myVariable1) <= parseInt(myVariable2));
