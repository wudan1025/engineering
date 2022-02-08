/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
(() => {
  // 声明模块定义
  var modules = {
    // key: 模块id, 是模块相对于根的相对路径
    // value: 函数，commonJS 文件
    './src/title.js':
      // module 当前模块，exports=module.exports 表示当前模块的导出对象
      // require 加载别的模块的方法
      (module, exports, require) => {
        // debugger;
        module.exports = 'com + com 同步';
      },
  };
  // 缓存 模块如果加载过就不需要再加载了
  var cache = {};
  function require(moduleId) {
    // debugger;
    var cachedModule = cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (cache[moduleId] = {
      exports: {},
    });
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    let title = require('./src/title.js');
    console.log(title);
  })();
})();
