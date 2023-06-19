/**
 * Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1.
 * @param {number[]} array
 * @returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1
 */
//
const takeLongestIncreasing = (array) => {
  let longestIcreasing = 1;
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    if (array[i + 1] === array[i] + 1) {
      count++;
      let j = i + 1;
      while (array[j + 1] === array[j] + 1 && j < array.length - 1) {
        count++;
        j++;
      }
      if (longestIcreasing < count) {
        longestIcreasing = count;
      }
      if (j == array.length - 1) {
        break;
      }
    }
  }
  return longestIcreasing;
};
module.exports = takeLongestIncreasing;
