(() => {
  var _modules = {
    './src/common.js': (_module, exports) => {
      var age = 'common';
      exports.age = age;
      setTimeout(() => {
        age = 'new common';
      }, 1000);
      // obj 导出为地址，修改内容会同步
      var obj = {
        val: 'obj',
      };
      exports.obj = obj;
      setTimeout(() => {
        obj.val = 'new obj';
      }, 1000);
    },
    './src/title.js': (_module, _exports, _require) => {
      'use strict';
      _require.r(_exports);
      _require.d(_exports, {
        // 每次获取都是获取当前作用域下的最新值
        age: () => age,
      });
      var age = 'es';
      setTimeout(() => {
        age = 'new es';
      }, 1000);
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
  var _exports = {};
  (() => {
    let common = _require('./src/common.js');
    let title = _require('./src/title.js');
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
