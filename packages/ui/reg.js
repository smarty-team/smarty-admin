// var regex = "/[0-9]*/";

// var str = "123";
// console.log("1".match(/[0-9]/));
// console.log("13".match(/[0-9]{2}/));
// console.log("123".match(/[0-9]{2}/));
// console.log("13".match(/\s{}/)); //

// console.log("13".match(/\S{}/)); // 除去空格

// console.log("a".match(/\s/)); // 所有字符

// console.log("1".match(/^[1-9][0-9]{}$/));
// console.log("1".match(/^[0-9]*$/));
// console.log("123".match(/^[0-9]+$/));

// 匹配十进制整数 匹配

// var str = "123";
// console.log("1".match(/[0-9]/));
// console.log("13".match(/[0-9]{2}/));
// console.log("123".match(/[0-9]{2}/));
// console.log("13".match(/\s{}/)); //

// console.log("13".match(/\S{}/)); // 除去空格

// console.log("a".match(/\s/)); // 所有字符

// console.log("1".match(/^[1-9][0-9]{}$/));
// console.log("1".match(/^[0-9]*$/));
// console.log("123".match(/^[0-9]+$/));
// [0, 1, 2, 3, 12, 123].forEach((v) => {
//   console.log(v, ("" + v).match(/^[0]|[1-9][0-9]*$/));
// });

// // 带小数点的
// [
//   "0",
//   "1",
//   "2",
//   "3",
//   "12",
//   "123",
//   "1.2",
//   "0.3",
//   "2.01",
//   "1.",
//   ".1",
//   "0.",
//   ".",
//   "",
// ].forEach((v) => {
//   const res = ("" + v).match(/^(([0]|[1-9][0-9]*)?((\.?)[0-9]*))?$/);
//   console.log(v, "|", res[0]);
//   return res;
// });

// let reg = /[0-9]?|\+|-|\*|(\s+)/g;

// let s = "1+2-3";
// let matched;

let re =
  /((?:(?:[1-9][0-9]*|0)(?:\.[1-9][0-9]*))|(?:(?:[1-9][0-9]*|0)\.?)|(?:\.[1-9][0-9]*))|(\+)|(-)|(\*)|(\/)|(\s+)/g;
let s = "1.1 + 2.2 - 3.31 * 4. / .5  ";
let matched;
while ((matched = re.exec(s))) {
  console.log(matched);
}

// let tokens;
// // 加减问题
// while ((matched = reg.exec(s))) {
//   console.log(matched[0]);
//   tokens.push(matched);
// }

// 乘除有限计算
// LL语法分析
// 产生式
// add = number + number
//add = mul + mul
// add = add + mul
// mul = number

// var t = ["1", "+", "2"];
// class Token () {
//     constructor(matched) {
//         if(matched[1]) {
//             this.type ="Number"
//             this.value = matched[1]
//         }
//     }
//     function add(tokens) {

//     }
// }

// add(t);

// var reg1 = /^([0]|[1-9][0-9]*)?((\.?)$/;

// // 小数
// var reg2 = /^(([0]|[1-9][0-9]*)?((\.?)[0-9]*))?$/;
