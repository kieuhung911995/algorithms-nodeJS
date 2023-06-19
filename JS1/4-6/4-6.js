/**
 * Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {number[]} array
 * @returns the number of distinct subsequences of the list that sum up to a target value.
 */

function maximumProduct(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let result = array[i] * array[j] * array[k];
        if (max < result) {
          max = result;
        }
      }
    }
  }
  return max;
}
module.exports = maximumProduct;
