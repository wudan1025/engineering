/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// commonJS 导出
// todo a 是变量 修改后，内容会同步
// var a = {
//   type: 'com + com',
//   title: function () {
//     return 'test';
//   },
// };

var a = '113';
module.exports = a;
console.log('123');

// setTimeout(() => {
//   a.type = 'com1+com1';
//   console.log(a);
// }, 2000);

setTimeout(() => {
  a = '234';
  console.log(a);
}, 2000);
