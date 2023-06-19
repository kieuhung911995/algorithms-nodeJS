const takeNumbOfString = require("./1-10.js");
test("add [Banana, Orange, Apple, Mango] to equal 3", () => {
  expect(takeNumbOfString(["Banana", "Orange", "Apple", "Mango"])).toBe(3);
});
test("add [AA,fafa, baka, none] to equal 2", () => {
  expect(takeNumbOfString(["AA", "fafa", "baka", "none"])).toBe(2);
});
test("add ['', a, baka, none,aaa] to equal 3", () => {
  expect(takeNumbOfString(["", "a", "baka", "none", "aaa"])).toBe(3);
});
