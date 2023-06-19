/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
 * @param {[]} array
 * @returns uniq array
 */

const takeUniq = (array) => {
  let uniqArray = Array.from(new Set(array));
  return uniqArray;
};
module.exports = takeUniq;
