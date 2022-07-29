/** TASK 60 - Modified push method for arrays
 *
 * 1. Create a new class "CustomArray" which should extend the built-in "Array"
 *
 * 2. Add one custom method "customPush" to the new class.
 * This method will have one "newElement" parameter.
 *
 * When calling this method, you must do the following:
 * - Add a new element to an existing array
 * (do not use the "push" method for this)
 * - Change the "length" property of the array (increment it by 1)
 * - Output the following line to the console:
 * "The new element <newElement> has just been added to the array"
 *
 * 3. Create an instance of the new class "CustomArray"
 * and test the new "customPush" method and compare it to "push"
 *
 * 4. What happens if the name of a custom method
 * in class "CustomArray" will also be "push" instead of "customPush"?
 * Try it.
 */

class CustomArray extends Array {
  customPush(newElement) {
    this[this.length] = newElement;
    return console.log(
      `The new element ${newElement} has just been added to the array`,
    );
  }
}

const myArray = new CustomArray(1, 2, 3);

console.log(myArray);

myArray.customPush(4);

console.log(myArray);
