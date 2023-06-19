/**
 * Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {number[]} nums
 * @param {number} target
 * @returns the number of distinct subsequences of the list that sum up to a target value
 */
//
function countDistinctSubsequences(nums, target) {
  let count = 0;

  function backtrack(index, currentSum, chosen) {
    if (currentSum === target && chosen.length > 1) {
      count++;
      return;
    }

    if (index === nums.length || currentSum > target) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates
      }

      chosen.push(nums[i]);
      backtrack(i + 1, currentSum + nums[i], chosen);
      chosen.pop();
    }
  }

  nums.sort((a, b) => a - b); // Sort the input array in ascending order
  backtrack(0, 0, []);
  return count;
}
module.exports = countDistinctSubsequences;
