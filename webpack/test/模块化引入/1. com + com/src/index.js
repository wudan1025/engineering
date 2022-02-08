/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// commonJS 引入
let title = require('./title.js');

console.log(title.type);
console.log(title.name);

setTimeout(() => {
  // 会更新 todo?
  console.log(title.name);
}, 5000);
