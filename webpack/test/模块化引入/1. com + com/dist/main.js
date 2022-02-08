/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
(() => {
  var __webpack_modules__ = {
    './src/title.js': (__unused_webpack_module, exports) => {
      exports.name = 'test';
      exports.type = 'com + com 同步';
      setTimeout(() => {
        exports.name = 'test123';
      }, 2000);
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    let title = __webpack_require__('./src/title.js');
    console.log(title.type);
    console.log(title.name);
    setTimeout(() => {
      console.log(title.name);
    }, 5000);
  })();
})();
