const switchOrder = require("./5-8.js");
test("array contain objects with new order", () => {
  expect(
    new Set(
      switchOrder(
        [
          { id: 10, order: 0 },
          { id: 12, order: 1 },
          { id: 9, order: 2 },
          { id: 11, order: 3 },
        ],
        9,
        1
      )
    )
  ).toEqual(
    new Set([
      { id: 10, order: 0 },
      { id: 12, order: 2 },
      { id: 9, order: 1 },
      { id: 11, order: 3 },
    ])
  );
});
test("array contain objects with new order", () => {
  expect(
    new Set(
      switchOrder(
        [
          { id: 10, order: 0 },
          { id: 12, order: 1 },
          { id: 9, order: 2 },
          { id: 11, order: 3 },
        ],
        10,
        3
      )
    )
  ).toEqual(
    new Set([
      { id: 10, order: 3 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 0 },
    ])
  );
});
test("array contain objects with new order", () => {
  expect(
    new Set(
      switchOrder(
        [
          { id: 10, order: 0 },
          { id: 12, order: 1 },
          { id: 9, order: 2 },
          { id: 11, order: 3 },
        ],
        12,
        3
      )
    )
  ).toEqual(
    new Set([
      { id: 10, order: 0 },
      { id: 12, order: 3 },
      { id: 9, order: 2 },
      { id: 11, order: 1 },
    ])
  );
});
