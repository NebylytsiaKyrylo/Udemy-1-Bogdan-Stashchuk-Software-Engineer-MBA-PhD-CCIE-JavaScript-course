/** TASK 40 - Converting JSON to JavaScript objects
 *
 * 1. Convert an array of JSON objects to an array of JavaScript objects
 *
 * 2. Print the resulting array to the console
 *
 * 3. Print the "postId" of the second object to the console
 *
 * 4. Print "commentsQuantity" of the last object to the console
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

const postsJS = postsJSON.map((element) => JSON.parse(element));

console.log(postsJS);

console.log(postsJS[1].postId);

console.log(postsJS[postsJS.length - 1].commentsQuantity);
