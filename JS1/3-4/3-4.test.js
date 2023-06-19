const findLargestOverlap = require("./3-4.js");
test("add [hello,world,foobar,barfoo,he,llo,] return [foobar,barfoo]", () => {
  expect(
    new Set(
      findLargestOverlap(["hello", "world", "foobar", "barfoo", "he", "llo"])
    )
  ).toEqual(new Set([["foobar", "barfoo"]]));
});
test("add [hello,world,for,barfoo,he,llo] return [for,barfoo]", () => {
  expect(
    new Set(
      findLargestOverlap(["hello", "world", "for", "barfoo", "he", "llo"])
    )
  ).toEqual(new Set([["for", "barfoo"]]));
});
test("add [aaa,world,for,barfoo,hello,llo] return [[for, barfoo],[hello, ello]]", () => {
  expect(
    new Set(
      findLargestOverlap(["aaa", "world", "for", "barfoo", "hello", "ello"])
    )
  ).toEqual(
    new Set([
      ["for", "barfoo"],
      ["hello", "ello"],
    ])
  );
});
