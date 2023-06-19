/**
 * Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.
 * @param {string[]} array
 * @returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.
 */

const sortString = (array) => {
  let result = [];
  let lengthArray = array.map((element) => element.length);
  let sortLengthArray = lengthArray.sort(function (a, b) {
    return a - b;
  });
  for (const numb of sortLengthArray) {
    let findIndex = array.findIndex((element) => element.length == numb);
    result.push(array[findIndex]);
    array.splice(findIndex, 1);
  }
  return result;
};
module.exports = sortString;
