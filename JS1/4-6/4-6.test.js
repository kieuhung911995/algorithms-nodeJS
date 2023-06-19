const maximumProduct = require("./4-6.js");
test("adds [-10, -5, 0, 1, 2, 3, 4] to equal 200", () => {
  expect(maximumProduct([-10, -5, 0, 1, 2, 3, 4])).toBe(200);
});

test("adds [-10, 5, 0, 1, 2, 3, 4] to equal 60", () => {
  expect(maximumProduct([-10, 5, 0, 1, 2, 3, 4])).toBe(60);
});

test("adds [-10, -5, 0, -1, -2, -3, -4] to equal 0", () => {
  expect(maximumProduct([-10, -5, 0, -1, -2, -3, -4])).toBe(0);
});
