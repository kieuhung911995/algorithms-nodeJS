/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers.
 * @param {number[]} array
 * @returns median of the numbers
 */

const takeMedian = (array) => {
  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  if (sortedArray.length % 2 != 0) {
    let medianIndex = (sortedArray.length - (sortedArray.length % 2)) / 2;
    return sortedArray[medianIndex];
  } else {
    let median =
      (sortedArray[sortedArray.length / 2 - 1] +
        sortedArray[sortedArray.length / 2]) /
      2;
    return median;
  }
};
module.exports = takeMedian;
