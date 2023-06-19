const takeLongestWord = require("./2-2.js");
test("return the longest word in the list", () => {
  expect(
    new Set(
      takeLongestWord([
        "123 12345 12",
        "1234 123456789 123",
        "123456 12345 123",
        "abcdefghi",
      ])
    )
  ).toEqual(new Set(["123456789", "abcdefghi"]));
});
test("return the longest word in the list", () => {
  expect(
    new Set(
      takeLongestWord([
        "123 12345 12",
        "1234 123456789 123",
        "123456 12345 123",
      ])
    )
  ).toEqual(new Set(["123456789"]));
});
test("return the longest word in the list", () => {
  expect(
    new Set(
      takeLongestWord([
        "abcdefghiklm",
        "1234 123456789 123",
        "123456 12345 123",
      ])
    )
  ).toEqual(new Set(["abcdefghiklm"]));
});
