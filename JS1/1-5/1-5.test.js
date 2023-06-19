const takeShortest = require("./1-5.js");
test("returns the shortest string in the input list", () => {
  expect(
    new Set(
      takeShortest([
        "stringab",
        "stringabcd",
        "stringabc",
        "stringabcdefgh",
        "stringde",
      ])
    )
  ).toEqual(new Set(["stringab", "stringde"]));
});
test("returns the shortest string in the input list", () => {
  expect(
    new Set(
      takeShortest([
        "stringab",
        "stringabcd",
        "stringabc",
        "stringabcdefgh",
        "",
        "stringde",
      ])
    )
  ).toEqual(new Set([""]));
});
test("returns the shortest string in the input list", () => {
  expect(
    new Set(
      takeShortest([
        "stringab",
        "stringabcd",
        "stringabc",
        "stringabcdefgh",
        "string",
        "string",
      ])
    )
  ).toEqual(new Set(["string", "string"]));
});
