/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {number[]} array
 * @returns the maximum difference between any two elements in the list
 */

const takeMaximumDifference = (array) => {
  return Math.max(...array) - Math.min(...array);
};
module.exports = takeMaximumDifference;
