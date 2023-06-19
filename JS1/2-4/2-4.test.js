const takeSumDivisible3and5 = require("./2-4.js");
test("adds [1, 2, 30, 5, 6, 45, 5, 10, 15] to equal 90", () => {
  expect(takeSumDivisible3and5([1, 2, 30, 5, 6, 45, 5, 10, 15])).toBe(90);
});
test("adds [1, 5, 6, 45, 5, 10, -15] to equal 30", () => {
  expect(takeSumDivisible3and5([1, 5, 6, 45, 5, 10, -15])).toBe(30);
});
test("adds [1, 5,-30, 6, 45, 5, 10, -15] to equal 0", () => {
  expect(takeSumDivisible3and5([1, 5, -30, 6, 45, 5, 10, -15])).toBe(0);
});
