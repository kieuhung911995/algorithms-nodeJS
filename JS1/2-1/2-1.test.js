const take2ndLargest = require("./2-1.js");
test("add [10, 2, 8, 7, 1, 4, 10, 10] tobe 8", () => {
  expect(take2ndLargest([10, 2, 8, 7, 1, 4, 10, 10])).toBe(8);
});
test("add [1] return 'array's length input must greater than or equal to 2' ", () => {
  expect(take2ndLargest([1])).toMatch(
    "array's length input must greater than or equal to 2"
  );
});
test("add [-7,-2,-4,-7,-4] tobe -4", () => {
  expect(take2ndLargest([-7, -2, -4, -7, -4])).toBe(-4);
});
test("add [10,10,4] tobe 4", () => {
  expect(take2ndLargest([10, 10, 4])).toBe(4);
});
test("add [10,10,10] return 'array hasn't second largest number'", () => {
  expect(take2ndLargest([10, 10, 10])).toMatch(
    "array hasn't second largest number"
  );
});
