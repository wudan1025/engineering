/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import { flatten, concat } from 'lodash';
// import flatten from 'lodash/flatten';
// import concat from 'lodash/concat';
import './title';
// console.log(flatten, concat);
console.log(111);

//  不引入 lodash 3.65 k
//  代码全部引入 lodash 536 K
//  直接部分引入 lodash 19.6 K
//  代码全部引入, 使用 plugin 引入部分功能， lodash 19.6 K

const load = document.getElementById('load');
load.addEventListener('click', () => {
  import(/* webpackChunkName: 'title' */ './title').then((result) => {
    console.log(result.default);
  });
});
