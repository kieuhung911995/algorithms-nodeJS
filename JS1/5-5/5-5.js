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
      let objJ = array[j];
      let objI = array[i];
      if (objJ[collect] === objI[collect]) {
        B.push(objI);
        let n = j;
        while (n < array.length) {
          let objN = array[n];
          if (objN[collect] === objI[collect]) {
            B.push(objN);
            array.splice(n, 1);
            n--;
          }
          n++;
        }
        array.splice(i, 1);
        j--;
        A.push(B);
      }
      if (objJ[collect] !== objI[collect]) {
        B = [];
        if (j == array.length - 1) {
          B.push(objI);
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
console.log(
  groupBy(
    [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 2 },
    ],
    "b"
  )
);
