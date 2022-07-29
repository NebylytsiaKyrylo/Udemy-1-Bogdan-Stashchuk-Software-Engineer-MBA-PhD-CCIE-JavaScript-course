/** TASK 29 - Strict Mode
 *
 * 1. Fix the bug that occurs when strict mode is enabled
 *
 * 2. What happens if you disable strict mode?
 */

'use strict';

function myFunction() {
  // a = 2;
  const a = 2;
  return a;
}

myFunction();
