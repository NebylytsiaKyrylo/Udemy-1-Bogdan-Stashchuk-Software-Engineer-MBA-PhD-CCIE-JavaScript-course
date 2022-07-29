/** TASK 37 - Loop "for .. in"
 *
 * Inside the "for .. in" loop before printing the property value to the console
 * check that the property is
 * own object property
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
};


for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}
