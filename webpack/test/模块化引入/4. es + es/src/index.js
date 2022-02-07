/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// const load = document.getElementById('load');
// load.addEventListener('click', () => {
//   import(/* webpackChunkName: 'title' */ './title').then((result) => {
//     console.log(result.default);
//   });
// });

// es module 引入
import { title } from './title.js';

console.log(title);

setTimeout(() => {
  console.log(title);
}, 5000);
