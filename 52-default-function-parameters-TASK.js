/** TASK 52 - Default Function Parameters
 *
 * 1. Create a "weatherForecast" function with two parameters "city" and "weather"
 *
 * 2. If the second argument is missing,
 * parameter "weather" should be set to "Great weather!"
 *
 * IMPORTANT:
 * - Solve this first WITHOUT the default function parameter
 * - Comment out the previous solution
 * and solve the same problem with default function parameter
 *
 *NOTE:
 * Carefully compare your results with those of test calls
 */

//----------------------1
// const weatherForecast = (city, weather) => {
// 	weather = (typeof weather !== 'undefined' >= 1) ? weather : 'Great weather!'
// 	return `Weather forecast for the city ${city}: ${weather}`
// }

//----------------------2
const weatherForecast = (city, weather = 'Great weather!') => {
  return `Weather forecast for the city ${city}: ${weather}`;
};

console.log(weatherForecast('Dubai', 'Sunny'));
// Weather forecast for the city Dubai: Sunny

console.log(weatherForecast('London', 'Small rain'));
// Weather forecast for the city London: Small rain

console.log(weatherForecast('Paris'));
// Weather forecast for the city Paris: Great weather!

console.log(weatherForecast('Miami', ''));
// Weather forecast for the city Miami:

console.log(weatherForecast('Las Vegas', undefined));
// Weather forecast for the city Las Vegas: Great weather!
