/** TASK 74 - Destructuring Objects
 *
 * Create a "shortPerson" function that destructures the object
 * and returns its short version
 *
 * Sample result:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * If the input object does not have a postsQuantity field,
 * it should get a default value of 0
 */

const shortPerson = (person) => {
  let {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person;

  return {
    n,
    c,
    a,
    p,
  };
};

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
};

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
};

console.log(shortPerson(person1));
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2));
// { n: "Alice", c: "Italy", a: 25, p: 0 }
