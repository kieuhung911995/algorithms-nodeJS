/**
 * Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers.
 * @param {number[]} array
 * @returns the longest increasing subsequence of the numbers
 */

const takeLongestSubsequence = (array) => {
  let longestSubsequence = 0;
  for (let i = 0; i < array.length; i++) {
    let A = [];
    let check = -Infinity;
    let m = i;
    while (m < array.length) {
      if (array[m] > check) {
        check = array[m];
        A.push(array[m]);
        m++;
      }
      if (array[m] <= check) {
        let n = m;
        let B = [...A];
        while (n < array.length) {
          if (array[n] > check) {
            check = array[n];
            B.push(array[n]);
          }
          n++;
        }
        if (B.length > longestSubsequence) {
          longestSubsequence = B.length;
        }
        if (A.length == 1 || m == array.length - 1) {
          check = A[A.length - 1];
          m++;
        } else {
          A.pop();
          check = A[A.length - 1];
        }
      }
      if (A.length > longestSubsequence) {
        longestSubsequence = A.length;
      }
    }
  }
  return longestSubsequence;
};

module.exports = takeLongestSubsequence;
