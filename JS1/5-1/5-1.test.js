const reverseArray = require("./5-1.js");
test("adds [3, 4, 5, 6, 7, 8] to equal [8, 7, 6, 5, 4, 3]", () => {
  expect(reverseArray([3, 4, 5, 6, 7, 8])).toEqual([8, 7, 6, 5, 4, 3]);
});
test("adds [3, 4, 5, 1, 7, 2] to equal [2, 7, 1, 5, 4, 3]", () => {
  expect(reverseArray([3, 4, 5, 1, 7, 2])).toEqual([2, 7, 1, 5, 4, 3]);
});
test("adds [7, 4, 7, 6, 7, 8] to equal [8, 7, 6, 7, 4, 7]", () => {
  expect(reverseArray([7, 4, 7, 6, 7, 8])).toEqual([8, 7, 6, 7, 4, 7]);
});
