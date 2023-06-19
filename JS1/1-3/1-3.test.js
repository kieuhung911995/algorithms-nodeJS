const takeSquare = require("./1-3.js");
test("add 3 to equal 9", () => {
  expect(takeSquare(3)).toBe(9);
});
test("add 2.5 to equal 6.25", () => {
  expect(takeSquare(2.5)).toBe(6.25);
});
test("add 0 to equal 0", () => {
  expect(takeSquare(0)).toBe(0);
});
test("add -2 to equal 4", () => {
  expect(takeSquare(-2)).toBe(4);
});
