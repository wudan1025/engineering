/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
(() => {
  var _modules = {
    './src/title.js': (module) => {
      module.exports = {
        name: 'title_name',
        age: 'title_age',
      };
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
    // 当前模式新增
    _require.n = (module) => {
      // es module 使用module['default']
      // debugger;
      var getter =
        module && module.__esModule ? () => module['default'] : () => module;
      // todo ? key 为 a
      _require.d(getter, { a: getter });
      return getter;
    };
  })();
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
  var _exports = {};
  (() => {
    'use strict';
    _require.r(_exports);
    var _title__WEBPACK_IMPORTED_MODULE_0__ = _require('./src/title.js');
    var _title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ _require.n(
      _title__WEBPACK_IMPORTED_MODULE_0__
    );
    // debugger;
    console.log(_title__WEBPACK_IMPORTED_MODULE_0___default());
    console.log(_title__WEBPACK_IMPORTED_MODULE_0__.age);
  })();
})();
