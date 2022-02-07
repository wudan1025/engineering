/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((module) => {

/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// commonJS 导出
// var a = {
//   type: 'com + com',
//   title: function () {
//     return 'test';
//   },
// };

var a = '113';
module.exports = a;
console.log('123');

// setTimeout(() => {
//   a.type = 'com1+com1';
//   console.log(a);
// }, 2000);

setTimeout(() => {
  a = '234';
  console.log(a);
}, 2000);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// const load = document.getElementById('load');
// load.addEventListener('click', () => {
//   import(/* webpackChunkName: 'title' */ './title').then((result) => {
//     console.log(result.default);
//   });
// });

// import './src/tilte.js';

// commonJS 引入
const type = __webpack_require__(/*! ./title.js */ "./src/title.js");

console.log(type);

setTimeout(() => {
  console.log(type);
}, 5000);

})();

/******/ })()
;