/**
 *Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {string[]} array
 * @returns the shortest string in the input list
 */
const takeShortest = (array) => {
  let shortestLength = +Infinity;
  let shortestString = [];
  for (const string of array) {
    if (string.length == shortestLength) {
      shortestString.push(string);
    }
    if (string.length < shortestLength) {
      shortestString = [];
      shortestLength = string.length;
      shortestString.push(string);
    }
  }
  return shortestString;
};
module.exports = takeShortest;
