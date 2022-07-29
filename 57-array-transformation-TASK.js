/** TASK 57 - Transforming an Array of Objects
 *
 * 1. Create a "processPosts" function that will return a new array of posts
 *
 * 2. Please note that
 * - some property names in each post changed
 * - ID of each message increased by 1000
 *
 * 3. The original array of posts must remain unchanged
 */

/* the new array should look like this
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

const processPosts = (inputPostsArray) => {
  return inputPostsArray.map((post) => {
    return {
      postId: post.postId + 1000,
      postAuthor: post.author,
      postCommentsQty: post.commentsQty === undefined ? 0 : post.commentsQty,
    };
  });
};

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
];

const processedPosts = processPosts(testPosts);
console.log(processedPosts);

console.log(testPosts);
// original array must remain unchanged
