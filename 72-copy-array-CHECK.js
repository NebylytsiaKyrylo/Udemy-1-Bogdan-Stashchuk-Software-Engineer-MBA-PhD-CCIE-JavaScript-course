/** TASK 72 - Copy of array
 *
 * Create a copy of the array.
 * When changing a copy of an array, the original array must not be changed
 */

const a = [1, 2, 3];

//1
// const b = a.slice()

//2
// const b = [...a]

//3
// const b = a.map(el => el)

//4
// const b = JSON.parse(JSON.stringify(a))

//5
const b = Array.from(a);

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3]
