const takeSumOfKey = require("./5-9.js");
test("sum of each key in object", () => {
  expect(
    takeSumOfKey([
      { a: 2, b: 10 },
      { a: 12, c: 11 },
      { a: 8, b: 14, d: 20 },
      { a: 8 },
    ])
  ).toMatchObject({ a: 30, b: 24, c: 11, d: 20 });
});
test("sum of each key in object", () => {
  expect(
    takeSumOfKey([
      { a: 4, d: 5 },
      { a: 12, c: 11 },
      { a: 8, b: 14, d: 20 },
      { a: 10 },
    ])
  ).toMatchObject({ a: 34, b: 14, c: 11, d: 25 });
});
test("sum of each key in object", () => {
  expect(
    takeSumOfKey([
      { d: 5, c: 7 },
      { a: 12, c: 11 },
      { a: 8, b: 14, d: 20 },
      { a: 10, b: 2 },
    ])
  ).toMatchObject({ a: 30, b: 16, c: 18, d: 25 });
});
