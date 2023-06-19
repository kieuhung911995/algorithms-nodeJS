const takeUniq = require("./5-3.js");
test("adds [1, 2, 3, 2, 4] to equal [1, 2, 3, 4]", () => {
  expect(new Set(takeUniq([1, 2, 3, 2, 4]))).toEqual(new Set([1, 2, 3, 4]));
});
test("adds [1, 3, 3, 3, 4] to equal [1, 3, 4]", () => {
  expect(new Set(takeUniq([1, 3, 3, 3, 4]))).toEqual(new Set([1, 3, 4]));
});
test("adds [1, 2, 3, 2, 3,5] to equal [1, 2, 3, 5]", () => {
  expect(new Set(takeUniq([1, 2, 3, 2, 3, 5]))).toEqual(new Set([1, 2, 3, 5]));
});
test("adds [a, b, a, 2, b,c] to equal [a, b, 2, c]", () => {
  expect(new Set(takeUniq(["a", "b", "a", 2, "b", "c"]))).toEqual(
    new Set(["a", "b", 2, "c"])
  );
});
