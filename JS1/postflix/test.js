let a = "100+20*(3+4)";
let arrayStringNumb = [];
let stack = [];
for (let i = 0; i < a.length; i++) {
  if (!isNaN(a[i])) {
    let stringNumb = "";
    stringNumb = stringNumb.concat("", a[i]);
    i++;
    arrayStringNumb.push(stringNumb);
  } else {
    stack.push(a[i]);
  }
}
let postfix = arrayStringNumb.map((element) => Number(element));
console.log(postfix);
console.log(stack);

// let a = "";
// let array = "abcd";
// for (let i = 0; i < array.length; i++) {
//   a = a.concat("", array[i]);
// }
// console.log(a);
