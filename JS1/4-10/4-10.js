/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
 * @param {string[]} arr
 * @param {number} k
 * @returns the two strings with the largest overlap of substrings, where the substrings must be at least k
 */
//
function findLargestOverlap(arr, k) {
  const arrSet = arr.map((element) => new Set(element.split("")));
  const convertArrSet = arrSet.map((element) => Array.from(element));
  let result;
  let resultArray = [];
  let maxSameChar = 0;
  let atLeastSameChar = k;
  for (let i = 0; i < convertArrSet.length - 1; i++) {
    for (let j = i + 1; j < convertArrSet.length; j++) {
      let countSameChar = 0;
      for (const element of convertArrSet[j]) {
        if (convertArrSet[i].includes(element)) {
          countSameChar++;
        }
      }
      if (maxSameChar == countSameChar && countSameChar >= atLeastSameChar) {
        result = [arr[i], arr[j]];
        resultArray.push(result);
      }
      if (maxSameChar < countSameChar && countSameChar >= atLeastSameChar) {
        resultArray = [];
        result = [arr[i], arr[j]];
        resultArray.push(result);
        maxSameChar = countSameChar;
      }
    }
  }
  if (resultArray.length != 0) {
    return resultArray;
  } else {
    return (result = "no result");
  }
}
module.exports = findLargestOverlap;
