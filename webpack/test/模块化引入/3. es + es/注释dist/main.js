/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
(() => {
  'use strict';
  var _modules = {
    './src/title.js': (__unused_webpack_module, _exports, _require) => {
      _require.r(_exports);
      _require.d(_exports, {
        default: () => __WEBPACK_DEFAULT_EXPORT__,
        age: () => age,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = 'title_name';
      const age = 'title_age';
    },
  };
  var _cache = {};
  function _require(moduleId) {
    var cachedModule = _cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (_cache[moduleId] = {
      exports: {},
    });
    _modules[moduleId](module, module.exports, _require);
    return module.exports;
  }
  (() => {
    _require.d = (exports, definition) => {
      for (var key in definition) {
        if (_require.o(definition, key) && !_require.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    _require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    _require.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();
  // import
  var _exports = {};
  (() => {
    // es module 引入 时需要给 _exports 添加属性
    _require.r(_exports);
    var _title__WEBPACK_IMPORTED_MODULE_0__ = _require('./src/title.js');
    console.log(_title__WEBPACK_IMPORTED_MODULE_0__['default']);
    console.log(_title__WEBPACK_IMPORTED_MODULE_0__.age);
  })();
})();
