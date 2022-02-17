/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
 * SyncWaterfallHook 表示如果上一个回调函数的结果不为 undefined,
 * 则可以作为下一个回调函数的第一个参数
 * 回调函数接受的参数来自于上一个函数的结果
 * 调用 call 传入的第一个参数，
 * 会被上一个函数的非 undefined 结果替换
 * 当回调函数返回非 undefined 不会停止回调栈的调用
 */

const { SyncWaterfallHook } = require('tapable');
const hook = new SyncWaterfallHook(['name', 'age']);

hook.tap('1', (name, age) => {
  console.log(1, name, age);
  return 'A';
});

hook.tap('2', (name, age) => {
  // 本次name值是上一次return返回值
  console.log(2, name, age);
  // 不影响
  return undefined;
});

hook.tap('3', (name, age) => {
  console.log(3, name, age); //A TODO
  return 'C';
});
hook.call('test', 13);
