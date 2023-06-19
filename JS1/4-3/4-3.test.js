const takeLongestSubString = require("./4-3.js");
test("add [abcdefg, abcde, abcdef, ab, abc] tobe 2", () => {
  expect(
    takeLongestSubString(["abcdefg", "abcde", "abcdef", "ab", "abc"])
  ).toBe(2);
});
test("add [programming, programmer, program] tobe 7", () => {
  expect(takeLongestSubString(["programming", "programmer", "program"])).toBe(
    7
  );
});
test("add [hello, world, jelly] tobe 1", () => {
  expect(takeLongestSubString(["hello", "world", "jelly"])).toBe(1);
});
test("add [abcd, ab, abcd, ab, abcd] tobe 2", () => {
  expect(takeLongestSubString(["abcd", "ab", "abcd", "ab", "abcd"])).toBe(2);
});
