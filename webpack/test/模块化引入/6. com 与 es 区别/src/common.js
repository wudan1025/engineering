/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// 写了默认导出，其他导出值会被覆盖
// module.exports = 'title';

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

// 写了默认导出，其他导出值会被覆盖
// module.exports = 'title';
