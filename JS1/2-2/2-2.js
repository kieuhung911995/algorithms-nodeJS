/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {string[]} array
 * @returns the longest word in the list
 */

const takeLongestWord = (array) => {
  let longestWord = "";
  let longestWordArray = [];
  let convertArray = array.map((element) => element.split(" "));
  convertArray.map((element) => {
    for (const child of element) {
      if (longestWord.length == child.length) {
        longestWordArray.push(child);
      }
      if (longestWord.length < child.length) {
        longestWordArray = [];
        longestWord = child;
        longestWordArray.push(child);
      }
    }
  });
  return longestWordArray;
};
module.exports = takeLongestWord;
