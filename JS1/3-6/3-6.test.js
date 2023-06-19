const takeMedian = require("./3-6.js");
test("adds [10, 2, 3], [2, 6, 5, 4, 3] to equal 3.5 ", () => {
  expect(takeMedian([10, 2, 3], [2, 6, 5, 4, 3])).toBe(3.5);
});
test("adds [10, 2, 3], [2, 6, 5, 4] to equal 4 ", () => {
  expect(takeMedian([10, 2, 3], [2, 6, 5, 4])).toBe(4);
});
test("adds [7, 9, 3], [2, 6, 5, 8, 4] to equal 5.5 ", () => {
  expect(takeMedian([7, 9, 3], [2, 6, 5, 8, 4])).toBe(5.5);
});
