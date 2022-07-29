/** PROBLEM 34 - Array of objects
 *
 * 1. Create an array with 3 "cars" objects
 *
 * 2. Each object must have three properties
 * - carBrand (string)
 * - price (number)
 * - isAvailableForSale (boolean)
 *
 * 3. Add another object to the array
 *
 * 4. Print the resulting array to the console
 */

const cars = [
  {
    carBrand: 'Mersedes',
    price: 10000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'BMW',
    price: 7000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Toyota',
    price: 12000,
    isAvailableForSale: false,
  },
];

const newCar = {
  carBrand: 'Renault',
  price: 8000,
  isAvailableForSale: true,
};

cars.push(newCar);
console.log(cars);
