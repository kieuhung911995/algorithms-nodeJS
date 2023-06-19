/**
 * chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
 * @param {[]} array
 * @param {number} chunk
 * @returns
 */

const takeChunk = (array, chunk) => {
  if (chunk > array.length) {
    return "chunk must less than or equal to array's length";
  }
  let j = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i += chunk) {
    j = j + chunk;
    newArray.push(array.slice(i, j));
  }
  return newArray;
};
module.exports = takeChunk;
