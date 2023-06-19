const takeMax = require("./1-4.js");
test("add [2,6,7,9] tobe 9", () => {
  expect(takeMax([2, 6, 7, 9])).toBe(9);
});
test("add [2,6,7,7.5,-9] tobe 7.5", () => {
  expect(takeMax([2, 6, 7, 7.5, -9])).toBe(7.5);
});
test("add [-2,-6,0,-7] tobe 9", () => {
  expect(takeMax([-2, -6, 0, -7])).toBe(0);
});
