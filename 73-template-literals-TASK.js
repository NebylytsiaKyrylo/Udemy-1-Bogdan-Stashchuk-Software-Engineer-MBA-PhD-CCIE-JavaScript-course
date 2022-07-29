/** TASK 73 - Template Strings
 *
 * Create a "carInfo" function that returns information about the car:
 * - A car is considered cheap if its price is <= 20000
 * - A car is considered expensive if its price is > 20000
 *
 * The output in the console must match those at the end of the task
 */

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
];

const carInfo = ({ brand, price }) =>
  `Car price ${brand} - ${price} and this ${
    price <= 20000 ? 'cheap' : 'expensive'
  } car`;

cars.forEach((car) => console.log(carInfo(car)));

// Car price Honda - 13000$ and this cheap car
// Car price Rolls-Royce - 120000$ and this expensive car
