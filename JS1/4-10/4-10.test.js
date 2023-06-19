const findLargestOverlap = require("./4-10.js");
test("adds [hello, world, foobar, barfoo, he, llo],4 return [[foobar, barfoo]]", () => {
  expect(
    new Set(
      findLargestOverlap(["hello", "world", "foobar", "barfoo", "he", "llo"], 4)
    )
  ).toEqual(new Set([["foobar", "barfoo"]]));
});
test("adds [hello, world, foobar, barfoo, he, llo, 12345, 25143],4 return [[foobar, barfoo],[12345, 25143]]", () => {
  expect(
    new Set(
      findLargestOverlap(
        ["hello", "world", "foobar", "barfoo", "he", "llo", "12345", "25143"],
        4
      )
    )
  ).toEqual(
    new Set([
      ["foobar", "barfoo"],
      ["12345", "25143"],
    ])
  );
});
test("adds [hello, world, ooar, barfoo, he, llo],4 return [[foobar, barfoo]]", () => {
  expect(
    findLargestOverlap(["hello", "world", "ooar", "barfoo", "he", "llo"], 4)
  ).toMatch("no result");
});
