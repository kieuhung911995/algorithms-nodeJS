const trimString = require("./5-6.js");
test("adds '    hello     world    ' to match 'hello world'", () => {
  expect(trimString("    hello     world        ")).toMatch("hello world");
});
test("adds '    hello     world    !    ' to match 'hello world'", () => {
  expect(trimString("    hello     world    !    ")).toMatch("hello world !");
});
test("adds '    I     am    good    ' to match 'hello world'", () => {
  expect(trimString("    I     am    good    ")).toMatch("I am good");
});
