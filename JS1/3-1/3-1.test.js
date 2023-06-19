const take2ndSmallest = require("./3-1.js");
test("add [0, 2, 8, 7, 1, 4, 0, 10] tobe 1", () => {
  expect(take2ndSmallest([0, 2, 8, 7, 1, 4, 0, 10])).toBe(1);
});
test("add [1] return 'array's length input must greater than or equal to 2' ", () => {
  expect(take2ndSmallest([1])).toMatch(
    "array's length input must greater than or equal to 2"
  );
});
test("add [-7,-2,-4,-7,-4] tobe -4", () => {
  expect(take2ndSmallest([-7, -2, -4, -7, -4])).toBe(-4);
});
test("add [4,10,4] tobe 4", () => {
  expect(take2ndSmallest([4, 10, 4])).toBe(10);
});
test("add [10,10,10] return 'array hasn't second largest number'", () => {
  expect(take2ndSmallest([10, 10, 10])).toMatch(
    "array hasn't second largest number"
  );
});
