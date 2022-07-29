/** TASK 26 - What will be displayed in the console
 *
 * What will be displayed in the console?
 * Answer the question without running the code
 */

function fn() {
  console.log('Hello from fn'); //Hello from fn

  return function (a) {
    console.log(a); // true
  };
}

fn()(true);
