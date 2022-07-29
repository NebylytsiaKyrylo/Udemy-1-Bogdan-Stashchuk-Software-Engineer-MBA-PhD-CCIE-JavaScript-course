/** TASK 31 - Intervals and Timeouts
 *
 * Use the following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * It is necessary to output to the console ONLY 5 messages with an interval of 2 seconds:
 * "Message number 1"
 * "Message number 2"
 * "Message number 3"
 * "Message number 4"
 * "Message number 5"
 */

let x = 1;

const myFnSetIntervalFn = setInterval(() => {
  console.log(`Message number ${x}`);
  x = x + 1;
}, 2000);

setTimeout(() => {
  clearInterval(myFnSetIntervalFn);
}, 12000);
