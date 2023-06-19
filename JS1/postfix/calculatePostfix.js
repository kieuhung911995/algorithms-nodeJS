/**
 *  calculate posfix expression
 * @param {string[]} postfix
 * @returns result of postfix calculation
 */
const calculatePostfix = (postfix) => {
  const calculator = (x, a, b) => {
    if (x === "^") {
      return b ** a;
    }
    if (x === "*") {
      return b * a;
    }
    if (x === "/") {
      return b / a;
    }
    if (x === "+") {
      return b + a;
    }
    if (x === "-") {
      return b - a;
    }
  };
  let stack = [];
  for (let i = 0; i < postfix.length; i++) {
    if (!isNaN(postfix[i])) {
      stack.push(Number(postfix[i]));
    }
    if (isNaN(postfix[i])) {
      let a = stack.pop();
      let b = stack.pop();
      let c = calculator(postfix[i], a, b);
      stack.push(c);
    }
  }
  let result = stack[0];
  return result;
};
module.exports = calculatePostfix;
