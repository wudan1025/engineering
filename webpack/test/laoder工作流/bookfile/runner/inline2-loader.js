/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
function loader(source) {
  // console.log('inline2');
  return source + '//inline2';
}
loader.pitch = function () {
  // console.log('inline2 pitch');
};
module.exports = loader;
