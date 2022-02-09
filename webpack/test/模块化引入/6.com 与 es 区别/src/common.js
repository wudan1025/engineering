/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
var age = 'common';
exports.age = age;

setTimeout(() => {
  age = 'new common';
}, 1000);

var obj = {
  val: 'obj',
};
exports.obj = obj;

setTimeout(() => {
  obj.val = 'new obj';
}, 1000);
