/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 * @param {string[]} array
 * @returns number of strings that contain the letter 'a'
 */

const takeNumbOfString = (array) => {
  let count = 0;
  for (const string of array) {
    if (string.includes("a")) {
      count++;
    }
  }
  return count;
};
module.exports = takeNumbOfString;
