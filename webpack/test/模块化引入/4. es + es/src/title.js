/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// es module 导出
var title = 'title';
console.log('ES+ES MODULE');
// 没有执行? todo
setTimeout(() => {
  title = 'title123';
  console.log(title);
}, 2000);
export { title };
