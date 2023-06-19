const takeUniq = require("./5-4.js");
test("return uniq array", () => {
  expect(
    new Set(
      takeUniq([
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { y: 2, x: 1 },
      ])
    )
  ).toEqual(
    new Set([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ])
  );
});
test("return uniq array", () => {
  expect(
    new Set(
      takeUniq([
        { y: 1, x: 2 },
        { x: 2, y: 1 },
        { y: 2, x: 1 },
      ])
    )
  ).toEqual(
    new Set([
      { y: 1, x: 2 },
      { y: 2, x: 1 },
    ])
  );
});
test("return uniq array", () => {
  expect(
    new Set(
      takeUniq([
        { y: 1, x: 2 },
        { x: 2, y: 1, z: 3 },
        { y: 2, x: 1 },
        { x: 4, y: 2, z: 3 },
        { x: 2, z: 3 },
        { y: 2, x: 4, z: 3 },
      ])
    )
  ).toEqual(
    new Set([
      { y: 1, x: 2 },
      { x: 2, y: 1, z: 3 },
      { y: 2, x: 1 },
      { x: 4, y: 2, z: 3 },
      { x: 2, z: 3 },
    ])
  );
});
