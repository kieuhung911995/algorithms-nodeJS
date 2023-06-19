const takeNumbOfWords = require("./1-9.js");
test("add 'Hello world' tobe 2", () => {
  expect(takeNumbOfWords("Hello world")).toBe(2);
});
test("add '   Hello   world    ' tobe 2", () => {
  expect(takeNumbOfWords("   Hello   world    ")).toBe(2);
});
test("add '   Hello     world    !' tobe 3", () => {
  expect(takeNumbOfWords("   Hello     world    !")).toBe(3);
});
test("add '     ' tobe 0", () => {
  expect(takeNumbOfWords("     ")).toBe(0);
});
