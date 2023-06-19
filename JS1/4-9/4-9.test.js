const takeLongestIncreasing = require("./4-9.js");
test("add [1, 2, 3, 8, 6, 3] tobe 3 ", () => {
  expect(takeLongestIncreasing([1, 2, 3, 8, 6, 3])).toBe(3);
});
test("add [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9] tobe 6 ", () => {
  expect(takeLongestIncreasing([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])).toBe(6);
});
test("add [1, 2, 3, 8, 3, 2, 3, 4, 5, 1, 8, 9] tobe 5 ", () => {
  expect(takeLongestIncreasing([1, 2, 3, 8, 3, 2, 3, 4, 5, 1, 8, 9])).toBe(4);
});
