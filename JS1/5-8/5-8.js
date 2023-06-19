/**
 * Switch Order: Viết function để thay đổi thứ tự order của các object.
 * @param {object[]} arr
 * @param {number} switchId
 * @param {number} switchOrder
 * @returns array contain objects with new order
 */

const switchOrder = (arr, switchId, switchOrder) => {
  let t;
  for (const obj of arr) {
    if (obj.id === switchId) {
      t = obj.order;
      for (const obj of arr) {
        if (obj.order === switchOrder) {
          obj.order = t;
          break;
        }
      }
      obj.order = switchOrder;
      break;
    }
  }
  return arr;
};
module.exports = switchOrder;
