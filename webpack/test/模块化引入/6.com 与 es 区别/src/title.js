/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

var age = 'es';
export { age };

// es module 导出
// export var age = 'es';

setTimeout(() => {
  age = 'new es';
}, 1000);
