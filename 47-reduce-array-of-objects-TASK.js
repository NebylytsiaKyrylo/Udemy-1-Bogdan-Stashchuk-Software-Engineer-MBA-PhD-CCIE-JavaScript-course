/** TASK 47 - Using the reduce method to create an array
 *
 * 1. Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty"
 *
 * 2. This "popularPostsIds" function must return an array of post id's,
 * whose number of comments is at least "minimalComentsQty"
 */

const popularPostsIds = (posts, minimalComentsQty) => {
  return posts.reduce((newArrComMin10, post) => {
    if (post.comments >= minimalComentsQty) {
      newArrComMin10.push(post.postId);
    }
    return newArrComMin10;
  }, []);
};

const inputPosts = [
  {
    title: 'How to learn JavaScript quickly?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Where is JavaScript used?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Whats the difference between React and Angular?',
    postId: 8135,
    comments: 12,
  },
];

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []
