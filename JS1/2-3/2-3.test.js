const takeLongestCommonSubsequence = require("./2-3.js");
test("add [abcdef,abczyzcdef] toMatch 'cdef'", () => {
  expect(takeLongestCommonSubsequence(["abcdef", "abczyzcdef"])).toMatch(
    "cdef"
  );
});
test("add [12b34vaebdhomnpv,tacbdjomnpkb34] toMatch 'omnp'", () => {
  expect(
    takeLongestCommonSubsequence(["12b34vaebdhomnpv", "tacbdjomnpkb34"])
  ).toMatch("omnp");
});
test("add [12b34vaebdhomnpv,''] toMatch ''", () => {
  expect(takeLongestCommonSubsequence(["12b34vaebdhomnpv", ""])).toMatch(
    "No longest common subsequence found"
  );
});
test("add [12b34vaebdhomnpv,9687v] toMatch ''", () => {
  expect(takeLongestCommonSubsequence(["12b34vaebdhomnpv", "9687v"])).toMatch(
    "v"
  );
});
test("add [12b34vaebdhomnpv,9687va] toMatch ''", () => {
  expect(takeLongestCommonSubsequence(["12b34vaebdhomnpv", "9687va"])).toMatch(
    "va"
  );
});
