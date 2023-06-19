/**
 * Group by: Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
 * @param {object[]} array
 * @param {string} collect
 * @returns 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định
 */
const groupBy = (array, collect) => {
  let A = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array.length === 1) {
      break;
    }
    let B = [];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j][collect] === array[i][collect]) {
        B.push(array[i]);
        let n = j;
        while (n < array.length) {
          if (array[n][collect] === array[i][collect]) {
            B.push(array[n]);
            array.splice(n, 1);
            n--;
          }
          n++;
        }
        array.splice(i, 1);
        j--;
        A.push(B);
      }
      if (array[j][collect] !== array[i][collect]) {
        B = [];
        if (j == array.length - 1) {
          B.push(array[i]);
          A.push(B);
          array.splice(i, 1);
          j--;
        }
      }
      if (array.length === 1) {
        B = [];
        B.push(array[0]);
        A.push(B);
        break;
      }
    }
  }
  return A;
};
module.exports = groupBy;
