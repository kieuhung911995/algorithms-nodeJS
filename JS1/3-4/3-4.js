/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
 * @param {string[]} arr
 * @returns the two strings with the largest overlap of characters.
 */

function findLargestOverlap(arr) {
  const arrSet = arr.map((element) => new Set(element.split("")));
  const convertArrSet = arrSet.map((element) => Array.from(element));
  let result = [];
  let resultArray = [];
  let maxSameChar = 0;
  for (let i = 0; i < convertArrSet.length - 1; i++) {
    for (let j = i + 1; j < convertArrSet.length; j++) {
      let countSameChar = 0;
      for (const element of convertArrSet[j]) {
        if (convertArrSet[i].includes(element)) {
          countSameChar++;
        }
      }
      if (maxSameChar == countSameChar) {
        result = [arr[i], arr[j]];
        resultArray.push(result);
      }
      if (maxSameChar < countSameChar) {
        resultArray = [];
        result = [arr[i], arr[j]];
        maxSameChar = countSameChar;
        resultArray.push(result);
      }
    }
  }
  return resultArray;
}
module.exports = findLargestOverlap;
console.log(
  findLargestOverlap(["aaa", "world", "for", "barfoo", "hello", "ello"])
);
