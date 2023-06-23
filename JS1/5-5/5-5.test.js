const groupBy = require("./5-5.js");
test("return 1 obj mới chứa dữ liệu được group theo trường chỉ định", () => {
  expect(
    new Set(
      groupBy(
        [
          { a: 1, b: 2 },
          { a: 1, b: 3 },
          { a: 2, b: 2 },
        ],
        "a"
      )
    )
  ).toEqual(
    new Set([
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
      ],
      [{ a: 2, b: 2 }],
    ])
  );
});
test("return 1 obj mới chứa dữ liệu được group theo trường chỉ định", () => {
  expect(
    new Set(
      groupBy(
        [
          { a: 1, b: 2 },
          { a: 1, b: 3 },
          { a: 2, b: 2 },
        ],
        "b"
      )
    )
  ).toEqual(
    new Set([
      [
        { a: 1, b: 2 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 3 }],
    ])
  );
});
