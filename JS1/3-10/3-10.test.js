const sortString = require("./3-10.js");
test("the list sorted by the number of distinct characters in each string, with the shortest strings appearing first", () => {
  expect(
    sortString(["apple", "banana", "orange", "kiwi", "strawberry"])
  ).toEqual(["kiwi", "apple", "banana", "orange", "strawberry"]);
});
test("the list sorted by the number of distinct characters in each string, with the shortest strings appearing first", () => {
  expect(sortString(["ap", "banana", "o", "kiwi", "straw"])).toEqual([
    "o",
    "ap",
    "kiwi",
    "straw",
    "banana",
  ]);
});
test("the list sorted by the number of distinct characters in each string, with the shortest strings appearing first", () => {
  expect(
    sortString(["apple", "banana456", "123", "kiwi", "strawberry"])
  ).toEqual(["123", "kiwi", "apple", "banana456", "strawberry"]);
});
