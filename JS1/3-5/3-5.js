/**
 * Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {number[]} array
 * @returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 */

const findSmallest = (array) => {
  let sortArray = array.sort(function (a, b) {
    return a - b;
  });
  let res = 1;
  for (let i = 0; i < sortArray.length && sortArray[i] <= res; i++) {
    res = res + sortArray[i];
  }
  return res;
};
module.exports = findSmallest;
