const takeLongestSubsequence = require("./3-3.js");
test("adds [3, 10, 2, 1, 20] to equal 3", () => {
  expect(takeLongestSubsequence([3, 10, 2, 1, 20])).toBe(3);
});
test("adds [-5, 6, 7, 1, 2, 4, 2] to equal 4", () => {
  expect(takeLongestSubsequence([-5, 6, 7, 1, 2, 4, 2])).toBe(4);
});
test("adds [3, 6, 5, 1, 2, 6, 9] to equal 4", () => {
  expect(takeLongestSubsequence([3, 6, 5, 1, 2, 6, 9])).toBe(4);
});
test("adds [-5, 1, 7, 1, 2, 4, 2, 8, 9, 2] to equal 4", () => {
  expect(takeLongestSubsequence([-5, 1, 7, 1, 2, 4, 2, 8, 9, 2])).toBe(6);
});
