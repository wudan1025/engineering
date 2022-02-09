(() => {
  var __webpack_modules__ = {
    './src/common.js': (__unused_webpack_module, exports) => {
      var age = 'common';
      exports.age = age;
      setTimeout(() => {
        age = 'new common';
      }, 1000);
      var obj = {
        val: 'obj',
      };
      exports.obj = obj;
      setTimeout(() => {
        obj.val = 'new obj';
      }, 1000);
    },
    './src/title.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        age: () => age,
      });
      var age = 'es';
      setTimeout(() => {
        age = 'new es';
      }, 1000);
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
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    let common = __webpack_require__('./src/common.js');
    let title = __webpack_require__('./src/title.js');
    console.log(title.age);
    console.log(common.age);
    console.log(common.obj);
    setTimeout(() => {
      console.log('settimeout');
      console.log(title.age);
      console.log(common.age);
      console.log(common.obj);
    }, 2000);
  })();
})();
