/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {number[]} array
 * @returns the second largest number in the list
 */

const take2ndLargest = (array) => {
  if (array.length <= 1) {
    return "array's length input must greater than or equal to 2";
  }
  let descArray = array.sort(function (a, b) {
    return b - a;
  });
  for (let i = 1; i < descArray.length; i++) {
    if (descArray[i] != descArray[0]) {
      return descArray[i];
    }
    if (i === descArray.length - 1) {
      return "array hasn't second largest number";
    }
  }
};
module.exports = take2ndLargest;
