/** TASK 56 - Destructuring Objects
 *
 * 1. Change the "personInfo" function to get the same output in the console
 *
 * {
 *   name: "Alice",
 *   personAge: 19,
 *   origin: "England",
 *   homeCity: "London",
 *   friendsQty: 0,
 *   createdAtYear: *current year*
 * }
 *
 * 2. The object returned by the "personInfo" function must contain only shortened property names
 */

const personInfo = (person) => {
  const {
    name,
    age: personAge,
    location: { country: origin, city: homeCity },
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
  } = person;

  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  };
};

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
};

const result = personInfo(person);

console.log(result);
