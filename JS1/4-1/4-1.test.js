const bubbleSort = require("./4-1.js");
test("adds [3, 1, 4, 2, 6, 5] to equal 4", () => {
  expect(bubbleSort([3, 1, 4, 2, 6, 5])).toBe(4);
});
test("adds [9, 1, 4, 2, 5, 5] to equal 6", () => {
  expect(bubbleSort([9, 1, 4, 2, 5, 5])).toBe(6);
});
test("adds [9, 6, 14, 2, 25, 5] to equal 8", () => {
  expect(bubbleSort([9, 6, 14, 2, 25, 5])).toBe(8);
});
