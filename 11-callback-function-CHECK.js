/** TASK 11 - Callback function
 *
 * 1. Print "Hello, world!" to the console. with a delay of 5 seconds
 *
 *2. Use arrow function
 */

//1
setTimeout(() => {
  console.log('Hello, world!');
}, 5000);

//2
const myFn = () => console.log('Hello, world!');
setTimeout(myFn, 5000);
