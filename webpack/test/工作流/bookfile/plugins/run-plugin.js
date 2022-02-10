/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

class RunPlugin {
  //应用此插件 参数就是Compiler对象实例
  apply(compiler) {
    // 监听 RunPlugin 事件
    compiler.hooks.run.tap('RunPlugin', () => {
      console.log('run:开始编译');
    });
  }
}
module.exports = RunPlugin;
