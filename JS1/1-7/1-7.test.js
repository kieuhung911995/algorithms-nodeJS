const sortAlphB = require("./1-7.js");
test("returns sorted array in alphabetical order", () => {
  expect(sortAlphB(["Banana", "Orange", "Apple", "Mango"])).toEqual([
    "Apple",
    "Banana",
    "Mango",
    "Orange",
  ]);
});
test("returns sorted array in alphabetical order", () => {
  expect(sortAlphB(["AaCD", "aaAd", "AAdc", "aaAA"])).toEqual([
    "AAdc",
    "AaCD",
    "aaAA",
    "aaAd",
  ]);
});
test("returns sorted array in alphabetical order", () => {
  expect(sortAlphB(["A10D", "02Ad", "AAdc", "aaAA"])).toEqual([
    "02Ad",
    "A10D",
    "AAdc",
    "aaAA",
  ]);
});
