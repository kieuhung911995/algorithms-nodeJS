/**
 * SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
 * @param {object[]} arr
 * @returns sum of each key in object
 */

const takeSumOfKey = (arr) => {
  let mergeObj = arr.reduce(
    (accumulator, currentValue) => Object.assign(accumulator, currentValue),
    {}
  );
  let arrayKeys = Object.keys(mergeObj);
  for (const key of arrayKeys) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i][key]) {
        arr[i][key] = 0;
      }
      sum = sum + arr[i][key];
    }
    mergeObj[key] = sum;
  }
  return mergeObj;
};
module.exports = takeSumOfKey;
