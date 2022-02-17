/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
function loader(source) {
  // console.log('post1');
  return source + '//post1';
}
loader.pitch = function () {
  // console.log('post1 pitch');
};
module.exports = loader;
