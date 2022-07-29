/** TASK 75 - Iterating over characters in a string
 *
 * Count the number of lowercase vowels in a string.
 * Vowels - a, e, i, o, u
 */

const str = 'Today is the best day of my life';

let count = str.match(/[aeiou]/gi).length;

console.log(count);
// 9
