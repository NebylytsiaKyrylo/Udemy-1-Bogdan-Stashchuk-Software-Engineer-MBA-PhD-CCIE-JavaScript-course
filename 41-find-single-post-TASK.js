/** TASK 41 - Finding objects in an array
 *
 * 1. Create a "findPostById" function with two parameters:
 * - Post ID
 * - array of posts
 *
 * 2. The function must return a post with a specific ID
 *
 * 3. If there is no post with a certain ID in the array of posts,
 * function must return "undefined"
 *
 * 4. Also inside the function print the post ID to the console
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

const findPostById = (id, arr) => {
  return arr.find((item) => item.postId == id);
};

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined
