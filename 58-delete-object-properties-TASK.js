/** TASK 58 - Removing Object Properties
 *
 * 1. Use object destructuring along with rest operator,
 * to quickly remove certain properties from an object.
 *
 * 2. Make sure that the variables that will be used to destruct the remote properties are
 * will not be available after the destructuring operation.
 */

/* the new object should look like this
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
};

const delPropFn = (user) => {
  let { index, email, name, cartId, ...delPropUser } = user;
  return {
    index,
    email,
    name,
    cartId,
  };
};

person = delPropFn(person);

// console.log(delPropUser) //delPropUser is not defined

console.log(person);
