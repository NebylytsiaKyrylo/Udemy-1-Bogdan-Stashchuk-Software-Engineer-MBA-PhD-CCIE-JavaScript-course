/** TASK 53 - Abbreviated Object Properties
  *
  * 1. Correct all errors in the code.
  *
  * 2. Modify the object returned by the "photosGallery" function using:
  * - Abbreviated property names
  * - Abbreviated method names
  * - You also need to change one property of the object
  * and make it a computed property
  *
  * 3. Messages in the console must be exactly the same as
  * same as at the end of this task
  */

//code with errors
/*
const photosGallery = (title, dimensions, date) => {
  return {
    title: title,
    info: function() {
      console.log(
        "Photo "${title}" has permission ${date}`
      );
    },
    dimensions: dimensions
    publishInfo: () => {
      console.log(
        `Photo was published ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} seconds ago`
      );
    ,
    date: date
  }
}
*/

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    date,
    [dimensions]: true,
    info() {
      console.log(`Photo "${title}" has permission ${dimensions}`);
    },
    publishInfo() {
      console.log(
        `Photo "${title}" was published ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000,
        )} seconds ago`,
      );
    },
  };
};
const myDogPhoto = photosGallery('My dog', '1920x1080', new Date());

const testDimension1 = '1920x1080';
const testDimension2 = '1080x720';

myDogPhoto.info();
/* Photo "My dog" has permission 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000);
/* Photo "My dog" was published 2 seconds ago */

console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined
