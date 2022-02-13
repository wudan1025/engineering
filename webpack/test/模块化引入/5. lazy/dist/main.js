/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
const load = document.getElementById('load');
load.addEventListener('click', () => {
  // import(/* webpackChunkName: 'title' */ './title').then((result) => {
  //   console.log(result.default);
  // });
  console.log('arrow')
  console.log(this)
});


load.addEventListener('click', function () {
  console.log(this)
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;