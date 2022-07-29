/** TASK 77 - Closures
 *
 * 1. Create a "createGreeting" function, inside which create:
 * - variable "greetingString" with value "Hey, this is"
 * (declare it using "let")
 * - "greet" function with one parameter, which should return
 * greeting string based on "greetingString" and parameter,
 * e.g. "Hey, this is Bob"
 * - "changeGreeting" function with one parameter, which should
 * change the value of the "greetingString" variable
 *
 * 2. The "createGreeting" function must return an object with two methods:
 *-greet
 * - changeGreeting
 */

const createGreeting = () => {
  let greetingString = 'Hey, this is';

  function greet(name) {
    return `${greetingString} ${name}`;
  }

  function changeGreeting(newText) {
    greetingString = newText;
  }

  return {
    greet,
    changeGreeting,
  };
};

const greeting1 = createGreeting();

console.log(greeting1.greet('Bob'));
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from');

console.log(greeting1.greet('Emily'));
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting();

console.log(greeting2.greet('Emily'));
// Hey, this is Emily

// my tests
/*
const helloFn = () => {
  let helloText = 'Bonjour';

  function bonjourUser(name) {
    return `${helloText} ${name}`;
  }

  function bonneApresMidi(name) {
    helloText = 'Bonne Apres-Midi';
    return `${helloText} ${name}`;
  }

  function changeHelloText(newChangeText) {
    helloText = newChangeText;
  }

  return {
    bonjourUser,
    bonneApresMidi,
    changeHelloText,
  };
};

const helloUser1 = helloFn();

console.log(helloUser1.bonjourUser('Kirill'));

console.log(helloUser1.bonneApresMidi('Kirill'));

helloUser1.changeHelloText('Au revoir');

console.log(helloUser1.bonjourUser('Kirill'));

const helloUser2 = helloFn();

console.log(helloUser2.bonjourUser('Valeria'));
*/
