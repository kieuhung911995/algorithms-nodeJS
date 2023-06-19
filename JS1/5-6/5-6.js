/**
 * TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
 * @param {*} string
 * @returns string with no whitespace except 1 between 2 words
 */

const trimString = (string) => {
  let trimLeftRight = string.trim();
  let trimCenter = trimLeftRight.replace(/\s+/g, " ");
  console.log(trimCenter.length);
  return trimCenter;
};
module.exports = trimString;
