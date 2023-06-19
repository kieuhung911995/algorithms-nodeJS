/**
 * Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 * @param {string[]} array
 * @returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 */

const sortString = (array) => {
  let sortArray = array.sort();
  let convertArray = sortArray.map((element) => element.replace(/\s/g, ""));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (convertArray[j].length < convertArray[j + 1].length) {
        let t = convertArray[j];
        convertArray[j] = convertArray[j + 1];
        convertArray[j + 1] = t;
        let c = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = c;
      }
    }
  }
  return sortArray;
};
module.exports = sortString;
let result = sortString([
  "jumps",
  "the 1234 jumps",
  "the lazy dog jumps",
  "the 1234 dog jumps",
]);
console.log(result);
