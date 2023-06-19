/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {number[]} array
 * @returns the second smallest number in the list
 */

const take2ndSmallest = (array) => {
  if (array.length <= 1) {
    return "array's length input must greater than or equal to 2";
  }
  let ascArray = array.sort(function (a, b) {
    return a - b;
  });
  console.log(ascArray);
  for (let i = 1; i < ascArray.length; i++) {
    if (ascArray[i] != ascArray[0]) {
      return ascArray[i];
    }
    if (i === ascArray.length - 1) {
      return "array hasn't second largest number";
    }
  }
};
module.exports = take2ndSmallest;
