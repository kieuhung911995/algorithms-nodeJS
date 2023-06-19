const takeSum = require("./1-1.js");
test("adds 1 + 2 to equal 3", () => {
  expect(takeSum(1, 2)).toBe(3);
});
test("adds -5 + 2 to equal -3", () => {
  expect(takeSum(-5, 2)).toBe(-3);
});
test("adds 7.2 + 2.9 to equal 10.1", () => {
  expect(takeSum(7.2, 2.9)).toBe(10.1);
});
