const sortAsc = require("./1-6.js");
test("add [4, 3, 2, 10] to equal [2, 3, 4, 10]", () => {
  expect(sortAsc([4, 3, 2, 10])).toEqual([2, 3, 4, 10]);
});
test("add [-5, 3, 2, 0, 10] to equal [-5, 0, 2, 3, 10]", () => {
  expect(sortAsc([-5, 3, 2, 0, 10])).toEqual([-5, 0, 2, 3, 10]);
});
test("add [-4, -3, -2, -10] to equal [-10, -4, -3, -2]", () => {
  expect(sortAsc([-4, -3, -2, -10])).toEqual([-10, -4, -3, -2]);
});
