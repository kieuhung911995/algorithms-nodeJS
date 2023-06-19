const maxSubArraySum = require("./2-5.js");
test("add [-2, -3, 4, -1, -2, 1, 5, -3] tobe 7", () => {
  expect(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
});
test("add [6, -3, 4, -10, -2, 1, 5, -3] tobe 7", () => {
  expect(maxSubArraySum([6, -3, 4, -10, -2, 1, 5, -3])).toBe(7);
});
test("add [-2, 4, 4, -1, -2, 1, -5, -3] tobe 8", () => {
  expect(maxSubArraySum([-2, 4, 4, -1, -2, 1, -5, -33])).toBe(8);
});
