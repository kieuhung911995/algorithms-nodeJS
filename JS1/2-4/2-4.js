/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {number[]} array
 * @returns the sum of the numbers that are divisible by both 3 and 5
 */

const takeSumDivisible3and5 = (array) => {
  let result = 0;
  for (const numb of array) {
    if (numb % 15 == 0) {
      result = result + numb;
    }
  }
  return result;
};
module.exports = takeSumDivisible3and5;
let result = takeSumDivisible3and5([1, 2, 30, 5, 6, 45, 5, 10, 15]);
console.log(result);
