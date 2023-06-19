/**
 * Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param {number[]} array
 * @returns sorted array in ascending order
 */
const sortAsc = (array) => {
  let sortResult = array.sort(function (a, b) {
    return a - b;
  });
  return sortResult;
};
module.exports = sortAsc;
