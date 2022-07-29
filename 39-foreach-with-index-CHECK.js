/** TASK 39 - Iterating over array elements
 *
 * 1. Create a "cityInfo" function with two parameters,
 * which returns a string
 * "London is at the index 0 in the myCities array"
 *
 * 2. Loop through all the elements of the "myCities" array,
 * for each element, call the "cityInfo" function
 * and print the result of the function call to the console
 */

const myCities = ['London', 'New York', 'Singapore'];

const cityInfo = (city, index) => {
  return `${city} is at the index ${index} in the myCities array`;
};

myCities.forEach((city, index) => {
  console.log(cityInfo(city, index));
});
