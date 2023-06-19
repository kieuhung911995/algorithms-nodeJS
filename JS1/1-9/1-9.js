/**
 * Write a program that takes a string as input and returns the number of words in the string
 * @param {string} string
 * @returns number of words in the string
 */

const takeNumbOfWords = (string) => {
  let trimLeftRight = string.trim();
  let trimCenter = trimLeftRight.replace(/\s+/g, " ");
  let count = 1;
  if (!trimCenter) {
    return (count = 0);
  }
  for (const word of trimCenter) {
    if (word === " ") {
      count++;
    }
  }
  return count;
};
module.exports = takeNumbOfWords;
