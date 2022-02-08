(() => {
  var _modules = {};
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
  _require.m = _modules;
  (() => {
    var getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__;
    var leafPrototypes;
    _require.t = function (value, mode) {
      if (mode & 1) value = this(value);
      if (mode & 8) return value;
      if (typeof value === 'object' && value) {
        if (mode & 4 && value.__esModule) return value;
        if (mode & 16 && typeof value.then === 'function') return value;
      }
      var ns = Object.create(null);
      _require.r(ns);
      var def = {};
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      for (
        var current = mode & 2 && value;
        typeof current == 'object' && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      ) {
        Object.getOwnPropertyNames(current).forEach(
          (key) => (def[key] = () => value[key])
        );
      }
      def['default'] = () => value;
      _require.d(ns, def);
      return ns;
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
    _require.f = {};
    _require.e = (chunkId) => {
      return Promise.all(
        Object.keys(_require.f).reduce((promises, key) => {
          _require.f[key](chunkId, promises);
          return promises;
        }, [])
      );
    };
  })();
  (() => {
    _require.u = (chunkId) => {
      return '' + chunkId + '.main.js';
    };
  })();
  (() => {
    _require.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })();
  })();
  (() => {
    _require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    var inProgress = {};
    var dataWebpackPrefix = '2.bundle:';
    _require.l = (url, done, key, chunkId) => {
      if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (
            s.getAttribute('src') == url ||
            s.getAttribute('data-webpack') == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
        }
      }
      if (!script) {
        needAttach = true;
        script = document.createElement('script');
        script.charset = 'utf-8';
        script.timeout = 120;
        if (_require.nc) {
          script.setAttribute('nonce', _require.nc);
        }
        script.setAttribute('data-webpack', dataWebpackPrefix + key);
        script.src = url;
      }
      inProgress[url] = [done];
      var onScriptComplete = (prev, event) => {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var doneFns = inProgress[url];
        delete inProgress[url];
        script.parentNode && script.parentNode.removeChild(script);
        doneFns && doneFns.forEach((fn) => fn(event));
        if (prev) return prev(event);
      };
      var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: 'timeout',
          target: script,
        }),
        120000
      );
      script.onerror = onScriptComplete.bind(null, script.onerror);
      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);
    };
  })();
  (() => {
    _require.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();
  (() => {
    var scriptUrl;
    if (_require.g.importScripts) scriptUrl = _require.g.location + '';
    var document = _require.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName('script');
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
      }
    }
    if (!scriptUrl)
      throw new Error('Automatic publicPath is not supported in this browser');
    scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    _require.p = scriptUrl;
  })();

  (() => {
    //chunkId title ,promises=[]
    //已经安装好的或者说加载好的代码块
    //key代码块的名字，入口默认就是main
    //值0表示已经就绪 加载完成
    var installedChunks = {
      main: 0,
      //title: [resolve, reject,promise]
      //title: 0
    };
    _require.f.j = (chunkId, promises) => {
      var installedChunkData = _require.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : undefined;
      if (installedChunkData !== 0) {
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          if (true) {
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] =
                  [resolve, reject])
            );
            promises.push((installedChunkData[2] = promise));
            var url = _require.p + _require.u(chunkId);
            var error = new Error();
            var loadingEnded = (event) => {
              if (_require.o(installedChunks, chunkId)) {
                installedChunkData = installedChunks[chunkId];
                if (installedChunkData !== 0)
                  installedChunks[chunkId] = undefined;
                if (installedChunkData) {
                  var errorType =
                    event && (event.type === 'load' ? 'missing' : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message =
                    'Loading chunk ' +
                    chunkId +
                    ' failed.\n(' +
                    errorType +
                    ': ' +
                    realSrc +
                    ')';
                  error.name = 'ChunkLoadError';
                  error.type = errorType;
                  error.request = realSrc;
                  installedChunkData[1](error);
                }
              }
            };
            _require.l(url, loadingEnded, 'chunk-' + chunkId, chunkId);
          } else installedChunks[chunkId] = 0;
        }
      }
    };
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      var [chunkIds, moreModules, runtime] = data;
      var moduleId,
        chunkId,
        i = 0;
      if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        for (moduleId in moreModules) {
          if (_require.o(moreModules, moduleId)) {
            _require.m[moduleId] = moreModules[moduleId];
          }
        }
        if (runtime) var result = runtime(_require);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (_require.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          installedChunks[chunkId][0]();
        }
        installedChunks[chunkId] = 0;
      }
    };
    var chunkLoadingGlobal = (self['webpackChunk_2_bundle'] =
      self['webpackChunk_2_bundle'] || []);
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
  })();
  var __webpack_exports__ = {};
  const load = document.getElementById('load');
  load.addEventListener('click', () => {
    _require
      .e('title')
      .then(_require.t.bind(_require, './src/title.js', 23))
      .then((result) => {
        console.log(result.default);
      });
  });
})();
