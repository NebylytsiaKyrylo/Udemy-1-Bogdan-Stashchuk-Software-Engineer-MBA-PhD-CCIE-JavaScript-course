/** TASK 49 - Sorting objects in an array
 *
 * 1. Create a function "sortProductsByPrice" with one parameter "products"
 *
 * 2. This function should sort the input array of products
 * by the price of each item in ascending order
 * and return sorted array
 *
 * 3. The original array must remain unchanged
 */

const sortProductsByPrice = (products) =>
  products
    .slice()
    .sort((currentProduct, nextProduct) => currentProduct.price - nextProduct.price);

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

const sortedProducts = sortProductsByPrice(inputProducts);

console.log(sortedProducts); // Array of sorted products

console.log(inputProducts); // The original array must not change
