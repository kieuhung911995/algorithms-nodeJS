const takeMedian = require("./1-8.js");
test("adds [10,4,3,2,6] to equal 4", () => {
  expect(takeMedian([10, 4, 3, 2, 6])).toBe(4);
});
test("adds [10,4,3,2,6,5] to equal 4.5", () => {
  expect(takeMedian([10, 4, 3, 2, 6, 5])).toBe(4.5);
});
test("adds [10,-4,3,2,-6,5] to equal 2.5", () => {
  expect(takeMedian([10, -4, 3, 2, -6, 5])).toBe(2.5);
});
