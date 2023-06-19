const countDistinctSubsequences = require("./4-2.js");
test("adds [1, 2, 3, 4, 5],5 to equal 2", () => {
  expect(countDistinctSubsequences([1, 2, 3, 4, 5], 5)).toBe(2);
});
test("adds [1, 1, 2, 3, 4],5 to equal 3", () => {
  expect(countDistinctSubsequences([1, 1, 2, 3, 4], 5)).toBe(3);
});
test("adds [1, 1, 1, 3, 4],5 to equal 2", () => {
  expect(countDistinctSubsequences([1, 1, 1, 3, 4], 5)).toBe(2);
});
