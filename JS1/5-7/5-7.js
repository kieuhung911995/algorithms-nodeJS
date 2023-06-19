/**
 * MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
 * @param {object[]} array
 * @param {string[]} keys
 * @returns mảng các object theo thứ tự mảng các key
 */
//
const mapKey = (array, keys) => {
  let A = [];
  array.map((element) => {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let singleValue = element[keys[i]];
      let singleObj = { singleKey: singleValue };
      singleObj[key] = singleObj["singleKey"];
      delete singleObj["singleKey"];
      obj = Object.assign(obj, singleObj);
    }
    A.push(obj);
  });
  return A;
};
module.exports = mapKey;
