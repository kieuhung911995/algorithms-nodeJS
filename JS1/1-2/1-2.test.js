const takeLength = require("./1-2.js");
test("add 'abc' tobe 3", () => {
  expect(takeLength("abc")).toBe(3);
});
test("add 'abcde' tobe 5", () => {
  expect(takeLength("abcde")).toBe(5);
});
test("add '' tobe 0", () => {
  expect(takeLength("")).toBe(0);
});
