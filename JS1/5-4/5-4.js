/**
 * uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
 * @param {object[]} array
 * @returns uniq array
 */

const takeUniq = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let isSame = true;
      const keys1 = Object.keys(array[j]);
      const keys2 = Object.keys(array[i]);
      if (keys1.length !== keys2.length) {
        isSame = false;
        continue;
      }
      for (let key of keys2) {
        if (array[j][key] !== array[i][key]) {
          isSame = false;
          continue;
        }
      }
      if (isSame) {
        array.splice(j, 1);
      }
    }
  }
  return array;
};
module.exports = takeUniq;
