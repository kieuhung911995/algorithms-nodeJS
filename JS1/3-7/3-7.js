/**
 * Write a program that takes a string as input and returns the length of the longest palindrome that can be formed by rearranging the characters in the string.
 * @param {string} string
 * @returns the length of the longest palindrome that can be formed by rearranging the characters in the string.
 */

const findLongestPalidrome = (string) => {
  let convertString = string.replace(/\s/g, "");
  let longestPalindrome = 0;
  for (let i = 0; i < convertString.length; i++) {
    for (let j = convertString.length - 1; j > i; j--) {
      if (convertString[j] === convertString[i]) {
        let n = j;
        let m = i;
        let A = [];
        let B = [];
        while (convertString[n] === convertString[m]) {
          A.push(convertString[m]);
          B.unshift(convertString[n]);
          m++;
          n--;
          if (n == m) {
            A.push(convertString[m]);
            let palindrome = [...A, ...B];
            if (longestPalindrome < palindrome.length) {
              longestPalindrome = palindrome.length;
            }
            break;
          }
          if (n < m) {
            let palindrome = [...A, ...B];
            if (longestPalindrome < palindrome.length) {
              longestPalindrome = palindrome.length;
            }
            break;
          }
        }
      }
    }
  }
  return longestPalindrome;
};
module.exports = findLongestPalidrome;
