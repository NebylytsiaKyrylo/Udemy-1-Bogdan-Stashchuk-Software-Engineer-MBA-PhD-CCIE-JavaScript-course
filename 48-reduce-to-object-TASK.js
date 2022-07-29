/** TASK 48 - Using the reduce method to create an object
 *
 * 1. Create a function "quantitiesByCategories" with one parameter "products"
 *
 * 2. This function must return an object with keys,
 * equal categories, and values,
 * equal to the sum of all quantities in each category
 */

const quantitiesByCategories = (products) => {
  return products.reduce((quantitiesByCategoriesObject, product) => {
    quantitiesByCategoriesObject[product.category] =
      (quantitiesByCategoriesObject[product.category] || 0) + product.quantity;

    return quantitiesByCategoriesObject;
  }, {});
};

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

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
