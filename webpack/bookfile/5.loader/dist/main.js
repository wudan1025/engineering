/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/less-loader.js!./src/index.less":
/*!*************************************************!*\
  !*** ./loaders/less-loader.js!./src/index.less ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./loaders/less-loader.js):\nTypeError: Cannot read property 'css' of undefined\n    at /Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/loaders/less-loader.js:12:64\n    at /Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/render.js:30:28\n    at /Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/parse.js:78:28\n    at ImportVisitor.finish [as _finish] (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/parser/parser.js:224:28)\n    at ImportVisitor._onSequencerEmpty (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/visitors/import-visitor.js:35:14)\n    at ImportSequencer.tryRun (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/visitors/import-sequencer.js:50:18)\n    at ImportVisitor.run (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/visitors/import-visitor.js:29:25)\n    at Object.parse (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/parser/parser.js:232:22)\n    at Object.parse (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/parse.js:76:18)\n    at Object.render (/Users/xes/Desktop/basic/engineering/webpack/bookfile/5.loader/node_modules/less/lib/less/render.js:28:18)");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


         let style = document.createElement('style');
         style.innerHTML =  __webpack_require__(/*! ../loaders/less-loader.js!./index.less */ "./loaders/less-loader.js!./src/index.less");
         document.head.appendChild(style);
     

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


__webpack_require__(/*! ./index.less */ "./src/index.less");
})();

/******/ })()
;