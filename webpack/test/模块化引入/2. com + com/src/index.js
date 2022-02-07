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

// import './src/tilte.js';

// commonJS 引入
const type = require('./title.js');

console.log(type);

setTimeout(() => {
  console.log(type);
}, 5000);
