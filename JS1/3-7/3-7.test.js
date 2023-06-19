const findLongestPalidrome = require("./3-7.js");
test("adds 'a man a plan a canal panama' to equal 21", () => {
  expect(findLongestPalidrome("a man a plan a canal panama")).toBe(21);
});
test("adds 'ama cdef ama ghk zxccxz' to equal 6", () => {
  expect(findLongestPalidrome("ama cdef ama ghk zxccxz")).toBe(6);
});
test("adds 'a man 1 plan a canal panama' to equal 11", () => {
  expect(findLongestPalidrome("a man 1 plan a canal panama")).toBe(11);
});
