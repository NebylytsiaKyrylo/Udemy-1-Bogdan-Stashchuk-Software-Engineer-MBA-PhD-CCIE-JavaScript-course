/** TASK 35 - Iterating over object properties
  *
  * 1. Loop through all the object's own properties
  *
  * 2. If the property name (key) is "key1" or "key3",
  * print the value of the property to the console.
  */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
};

Object.keys(myObject).forEach((key) => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key]);
  }
});
