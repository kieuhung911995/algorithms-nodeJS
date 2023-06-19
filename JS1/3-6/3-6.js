/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns the median of the combined list.
 */

const takeMedian = (array1, array2) => {
  let array = [...array1, ...array2];
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
