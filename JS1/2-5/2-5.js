/**
 * Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
 * @param {number[]} array
 * @returns the maximum sum of any contiguous subarray within the list
 */

const maxSubArraySum = (array) => {
  let currentSum = 0;
  let maxSum = -Infinity;
  for (const numb of array) {
    currentSum = currentSum + numb;
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};
module.exports = maxSubArraySum;
let result = maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(result);
