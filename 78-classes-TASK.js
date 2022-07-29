/** TASK 78 - Classes
 *
 * 1. Create class "Fruit"
 *
 * 2. Each instance of this class must have
 * two own properties:
 * - title
 * - price
 *
 * 3. You also need to add the "priceInfo" method, which
 * will return a string containing the name and price of the fruit
 *
 * 4. The outputs in the console must match
 */

class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`;
  }
}

const apple = new Fruit('Apple', 2);
console.log(apple.priceInfo());
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3);
console.log(orange.priceInfo());
// Price of the Orange is 3$
