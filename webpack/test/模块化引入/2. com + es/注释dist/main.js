(() => {
  var _modules = {
    './src/title.js': (__unused_webpack_module, _exports, require) => {
      ('use strict');
      //一旦webpack检测到你的代码里有export 和import关键字，它就认为这是一个ES Module
      // 将 es module 通过添加字段 及 属性 包装为 commonJS  可以使用属性
      //exports.__esModule=true 你可以通过它来判断转换前是不是ES 模块
      require.r(_exports);
      // 导出遍历挂在 _exports 上
      //ES 模块默认导出export default 会挂载到exports.default上，age会挂载到exports.age上

      require.d(_exports, {
        default: () => __WEBPACK_DEFAULT_EXPORT__,
        age: () => age,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = 'title_name';
      const age = 'title_age';
    },
  };
  var _cache = {};
  function require(moduleId) {
    var cachedModule = _cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (_cache[moduleId] = {
      exports: {},
    });
    _modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  (() => {
    // defineProperty 添加属性
    require.d = (exports, definition) => {
      for (var key in definition) {
        if (require.o(definition, key) && !require.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    // 是否含有某个属性
    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    // 对于es module 添加字段
    require.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // Object.prototype.toString.call 类型判断为 [object Module]
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

        console.log(typeof exports); // object
        console.log(Object.prototype.toString.call(exports)); // [object Module]
      }
      //exports.__esModule=true;
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();
  var _exports = {};
  (() => {
    let title = require('./src/title.js');
    console.log(title);
    console.log(title.age);
  })();
})();
