const findSmallest = require("./3-5.js");
test("add [1, 2, 3, 7, 8, 20] tobe 42", () => {
  expect(findSmallest([1, 2, 3, 7, 8, 20])).toBe(42);
});
test("add [5, 2, 9, 7, 8, 20] tobe 1", () => {
  expect(findSmallest([5, 2, 9, 7, 8, 20])).toBe(1);
});
test("add [5, 2, 4, 1, 8, 20] tobe 41", () => {
  expect(findSmallest([5, 2, 4, 1, 8, 20])).toBe(41);
});
