/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {number[]} list
 * @returns largest number in the input list
 */
const takeMax = (list) => {
  return Math.max(...list);
};
module.exports = takeMax;
