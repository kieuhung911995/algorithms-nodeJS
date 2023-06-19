const mapKey = require("./5-7.js");
test("return mảng các object theo thứ tự mảng các key", () => {
  expect(
    mapKey(
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ],
      ["b", "a", "c"]
    )
  ).toEqual([
    { b: 1, a: 1, c: 2 },
    { b: 1, a: 2, c: 5 },
    { b: 11, a: 22, c: 51 },
  ]);
});
test("return mảng các object theo thứ tự mảng các key", () => {
  expect(
    mapKey(
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ],
      ["a", "c", "b"]
    )
  ).toEqual([
    { a: 1, c: 2, b: 1 },
    { a: 2, c: 5, b: 1 },
    { a: 22, c: 51, b: 11 },
  ]);
});
test("return mảng các object theo thứ tự mảng các key", () => {
  expect(
    mapKey(
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ],
      ["d", "e", "a"]
    )
  ).toEqual([
    { d: 4, e: 5, a: 1 },
    { d: 4, e: 5, a: 2 },
    { d: 4, e: 5, a: 22 },
  ]);
});
