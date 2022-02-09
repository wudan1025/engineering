/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// commonJS 引入
let common = require('./common.js');
let title = require('./title.js');

// console.log(title);
console.log(title.age);

// console.log(common);
console.log(common.age);
console.log(common.obj);

setTimeout(() => {
  console.log('settimeout');
  console.log(title.age);
  console.log(common.age);
  console.log(common.obj);
}, 2000);
