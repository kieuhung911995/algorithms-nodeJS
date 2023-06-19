/**
 * Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 * @param {number[]} array
 * @returns returns the minimum number of moves required to sort the list in ascending order using bubble sort
 */

const bubbleSort = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
        count++;
      }
    }
  }
  return count;
};
module.exports = bubbleSort;
