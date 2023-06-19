/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
 * @param {number[]} array
 * @returns reverse array
 */
//
const reverseArray = (array) => {
  let result = array.reduce(
    (reversedArr, currentElement) => [currentElement, ...reversedArr],
    []
  );
  return result;
};
module.exports = reverseArray;
