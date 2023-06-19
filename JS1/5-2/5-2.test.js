const takeChunk = require("./5-2.js");
test("add  to equal ", () => {
  expect(takeChunk(["a", "b", "c", "d"], 4)).toEqual([["a", "b", "c", "d"]]);
});
test("add  to equal ", () => {
  expect(takeChunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});
test("add [a, b, c, d, e, f, g, h],3 to equal [[a, b, c],[d, e, f],[g, h]]", () => {
  expect(takeChunk(["a", "b", "c", "d", "e", "f", "g", "h"], 3)).toEqual([
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h"],
  ]);
});
test("add [a, b, c, d, e, f, g, h],5 to equal [[a, b, c ,d, e],[f, g, h]]", () => {
  expect(takeChunk(["a", "b", "c", "d", "e", "f", "g", "h"], 5)).toEqual([
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h"],
  ]);
});
test("add [a, b, c, d, e, f, g, h],9 return 'chunk must less than or equal to array's length'", () => {
  expect(takeChunk(["a", "b", "c", "d", "e", "f", "g", "h"], 9)).toMatch(
    "chunk must less than or equal to array's length"
  );
});
