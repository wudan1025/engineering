/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
function loader(source) {
  // console.log('post2');
  return source + '//post2';
}
loader.pitch = function () {
  // console.log('post2 pitch');
};
module.exports = loader;
