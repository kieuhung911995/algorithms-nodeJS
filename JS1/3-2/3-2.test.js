const takeMaximumDifference = require("./3-2.js");
test("add [1, 2, 91, 9, 100] to equal 99", () => {
  expect(takeMaximumDifference([1, 2, 91, 9, 100])).toBe(99);
});
test("add [10, 2, 91, 9, 77] to equal 89", () => {
  expect(takeMaximumDifference([10, 2, 91, 9, 77])).toBe(89);
});
test("add [1, 2, -8,28] to equal 36", () => {
  expect(takeMaximumDifference([1, 2, -8, 28])).toBe(36);
});
