const postfix = require("./postfix.js");
test("add '100 + 10 * 6 + 50' to equal ['100','10','6','*','+','50','+']", () => {
  expect(postfix("100 + 10 * 6 + 50")).toEqual([
    "100",
    "10",
    "6",
    "*",
    "+",
    "50",
    "+",
  ]);
});
test("add '((10 + 2) - 3 * (15 / 5)) + 100' to equal ['10','2','+','3','15','5','/','*','-','100','+']", () => {
  expect(postfix("((10 + 2) - 3 * (15 / 5)) + 100")).toEqual([
    "10",
    "2",
    "+",
    "3",
    "15",
    "5",
    "/",
    "*",
    "-",
    "100",
    "+",
  ]);
});
test("add '(6+5*3^2-(4*2/(4-2)))+20' to equal ['6','5','3','2','^','*','+','4','2','*','4','2','-','/','-','20','+']", () => {
  expect(postfix("(6+5*3^2-(4*2/(4-2)))+20")).toEqual([
    "6",
    "5",
    "3",
    "2",
    "^",
    "*",
    "+",
    "4",
    "2",
    "*",
    "4",
    "2",
    "-",
    "/",
    "-",
    "20",
    "+",
  ]);
});
