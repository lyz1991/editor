/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor.js":
/*!*******************!*\
  !*** ./editor.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core/editor */ \"./modules/core/editor.js\");\n\nnew _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor', '#config', {\n  bold: true\n})\n\n//# sourceURL=webpack:///./editor.js?");

/***/ }),

/***/ "./modules/MenuList.js":
/*!*****************************!*\
  !*** ./modules/MenuList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _bold_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold/bold */ \"./modules/bold/bold.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./modules/config/index.js\");\n\n\n\nclass Menu {\n  constructor (opt, mContainer) {\n    this.bold = _bold_bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    this.init(opt, mContainer)\n  }\n  init (opt, mContainer) {\n    let frag = document.createDocumentFragment()\n    for (let key in opt ) {\n      _util_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].append(frag, _util_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].generateNode(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"][key].tpl))\n    }\n    _util_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].append(mContainer, frag)\n  }\n}\n\n//# sourceURL=webpack:///./modules/MenuList.js?");

/***/ }),

/***/ "./modules/bold/bold.js":
/*!******************************!*\
  !*** ./modules/bold/bold.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  tpl: '<button>加粗</button>',\n  active: false,\n  onClick (e, state, value) {\n    return document.execCommand('bold', value)\n  }\n});\n\n//# sourceURL=webpack:///./modules/bold/bold.js?");

/***/ }),

/***/ "./modules/config/index.js":
/*!*********************************!*\
  !*** ./modules/config/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bold/bold */ \"./modules/bold/bold.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'bold': _bold_bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./modules/config/index.js?");

/***/ }),

/***/ "./modules/core/editor.js":
/*!********************************!*\
  !*** ./modules/core/editor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuList */ \"./modules/MenuList.js\");\n\n\nclass Editor {\n  constructor (selector, selector2, opt = {}) {\n    this.id = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(selector)\n    this.configContainer = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(selector2)\n    new _MenuList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](opt, this.configContainer)\n  }\n}\n\n//# sourceURL=webpack:///./modules/core/editor.js?");

/***/ }),

/***/ "./modules/util/util.js":
/*!******************************!*\
  !*** ./modules/util/util.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  query (selector) {\n    return document.querySelector(selector)\n  },\n  append (container, tpl) {\n    container.appendChild(tpl)\n  },\n  generateNode (tpl) {\n    let element = document.createElement('div')\n    element.innerHTML = tpl\n    return element\n  }\n});\n\n\n//# sourceURL=webpack:///./modules/util/util.js?");

/***/ })

/******/ });