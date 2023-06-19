const sortString = require("./4-7.js");
test("the list sorted by the number of distinct words in each string, with the longest strings appearing first", () => {
  expect(
    sortString([
      "the quick brown fox",
      "the lazy dog jumps over the fence",
      "the cat in the hat",
    ])
  ).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
  ]);
});
test("the list sorted by the number of distinct words in each string, with the longest strings appearing first", () => {
  expect(
    sortString([
      "the quick brown fox",
      "the lazy dog jumps over the fence",
      "tve cat in the hat",
      "the cat in the hat",
    ])
  ).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
    "tve cat in the hat",
  ]);
});
test("the list sorted by the number of distinct words in each string, with the longest strings appearing first", () => {
  expect(
    sortString([
      "the lazy dog jumps",
      "the 1234 dog jumps",
      "the 1234 jumps",
      "jumps",
    ])
  ).toEqual([
    "the 1234 dog jumps",
    "the lazy dog jumps",
    "the 1234 jumps",
    "jumps",
  ]);
});
