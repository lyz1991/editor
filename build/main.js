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
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core/editor */ \"./modules/core/editor.js\");\n\nnew _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor', '#config', {\n  bold: true,\n  italic: true\n})\n\n//# sourceURL=webpack:///./editor.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core/editor */ \"./modules/core/editor.js\");\n\n__webpack_require__(/*! ./less/icon.less */ \"./less/icon.less\")\nnew _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor', '#config', {\n  formatBlock: true,\n  bold: true,\n  italic: true,\n  strike: true,\n  horizontal: true\n})\nnew _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor1', '#config1', {\n  bold: true,\n  italic: true,\n  strike: true,\n  horizontal: true,\n  formatBlock: true\n})\n\n//# sourceURL=webpack:///./editor.js?");

/***/ }),

/***/ "./less/icon.less":
/*!************************!*\
  !*** ./less/icon.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./less/icon.less?");
>>>>>>> 抽出来

/***/ }),

/***/ "./modules/MenuList.js":
/*!*****************************!*\
  !*** ./modules/MenuList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _bold_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold/bold */ \"./modules/bold/bold.js\");\n/* harmony import */ var _italic_italic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./italic/italic */ \"./modules/italic/italic.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./modules/config/index.js\");\n\n\n\n\nclass Menu {\n  constructor (opt, mContainer) {\n    this.bold = _bold_bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    this.italic = _italic_italic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    this.init(opt, mContainer)\n  }\n  init (opt, mContainer) {\n    let frag = document.createDocumentFragment()\n    for (let key in opt ) {\n      _util_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].append(frag, _util_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generateNode(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][key]))\n    }\n    _util_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].append(mContainer, frag)\n    this.bind(mContainer)\n  }\n  bind (mContainer) {\n    for (let i in this) {\n      let dom = mContainer.querySelector(`button[name=${this[i].name}]`)\n      dom.addEventListener('click',  (e) => {\n        if (!this[i].active) {\n         return this[i].onClick(e, window.getSelection().toString())\n        }\n        return document.execCommand('Redo')\n      })\n    }\n  }\n}\n\n//# sourceURL=webpack:///./modules/MenuList.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _menus_bold_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus/bold/bold */ \"./modules/menus/bold/bold.js\");\n/* harmony import */ var _menus_italic_italic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus/italic/italic */ \"./modules/menus/italic/italic.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/dom */ \"./modules/util/dom.js\");\n/* harmony import */ var _menus_strike_strike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menus/strike/strike */ \"./modules/menus/strike/strike.js\");\n/* harmony import */ var _menus_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus/header/header */ \"./modules/menus/header/header.js\");\n/* harmony import */ var _menus_horizontal_horizontal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus/horizontal/horizontal */ \"./modules/menus/horizontal/horizontal.js\");\n/* harmony import */ var _dropList_droplist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropList/droplist */ \"./modules/dropList/droplist.js\");\n\n\n\n\n\n\n\n\nclass Menu {\n  constructor (editor, opt) {\n    this.bold = _menus_bold_bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    this.italic = _menus_italic_italic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    this.strike = _menus_strike_strike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    this.formatBlock = _menus_header_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    this.horizontal = _menus_horizontal_horizontal__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    this.init(editor, opt)\n  }\n  init (editor, opt) {\n    let frag = document.createDocumentFragment()\n    for (let key in opt ) {\n      _util_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].append(frag, Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__[\"$\"])(this[key].tpl)[0])\n    }\n    _util_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].append(editor.configContainer, frag)\n    new _dropList_droplist__WEBPACK_IMPORTED_MODULE_7__[\"default\"]([{\n      html: 'H1'\n    },{\n      html: 'H2'\n    },{\n      html: 'H3'\n    },{\n      html: 'H4'\n    }], editor.configContainer.querySelector(\"li[name='formatBlock']\"), editor)\n    this.bind(editor)\n  }\n  bind (editor) {\n    let range = document.createRange()\n    for (let i in this) {\n      let dom = editor.configContainer.querySelector(`li[name=${this[i].name}]`)\n      dom.addEventListener('click',  (e) => {\n        return this[i].onClick(e, editor)\n      })\n    }\n  }\n}\n\n//# sourceURL=webpack:///./modules/MenuList.js?");
>>>>>>> 抽出来

/***/ }),

/***/ "./modules/core/editor.js":
/*!********************************!*\
  !*** ./modules/core/editor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'bold',\n  active: false,\n  onClick (e, state, value) {\n    return document.execCommand('bold', value)\n  }\n});\n\n//# sourceURL=webpack:///./modules/bold/bold.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ \"./modules/util/dom.js\");\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuList */ \"./modules/MenuList.js\");\n\n\n\nclass Editor {\n  constructor (selector, selector2, opt = {}) {\n    this.container = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(selector)\n    this.id = this.container.id\n    this.configContainer = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(selector2)\n    new _MenuList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, opt)\n    this._initDom(selector)\n    this._bindEvent(this)\n  }\n  _initDom (selector) {\n    _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(this.container, Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('<p><br></p>')[0])\n  }\n  _bindEvent (editor) {\n    this.container.addEventListener('blur', (e) => {\n      this.orirange = window.getSelection().getRangeAt(0)\n    })\n  }\n}\n\n//# sourceURL=webpack:///./modules/core/editor.js?");
>>>>>>> 抽出来

/***/ }),

/***/ "./modules/dropList/droplist.js":
/*!**************************************!*\
  !*** ./modules/dropList/droplist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'bold': '<button name=\"bold\">加粗</button>',\n  'italic': '<button name=\"italic\">加粗</button>',\n});\n\n//# sourceURL=webpack:///./modules/config/index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DropList; });\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selections/selection */ \"./modules/selections/selection.js\");\n\nclass DropList {\n  constructor (list,  container, editor) {\n    let frag = document.createDocumentFragment()\n    let ul = document.createElement('ul')\n    ul.style.display = 'none'\n    frag.appendChild(ul)\n    for (let i = 0, len = list.length; i < len; i++) {\n      let li = document.createElement('li')\n      li.setAttribute('value', `<h${i+1}>`)\n      li.innerHTML = list[i].html\n      ul.appendChild(li)\n    }\n    container.appendChild(frag)\n    this.bind(ul, editor)\n  }\n  bind (el, editor) {\n    el.addEventListener('click', function (e) {\n      e.stopPropagation()\n      _selections_selection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveRange(editor.orirange)\n      document.execCommand('formatBlock', false, e.target.getAttribute('value'))\n    })\n  }\n}\n\n//# sourceURL=webpack:///./modules/dropList/droplist.js?");
>>>>>>> 抽出来

/***/ }),

/***/ "./modules/menus/bold/bold.js":
/*!************************************!*\
  !*** ./modules/menus/bold/bold.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'bold',\n  tpl: '<li name=\"bold\"><i class=\"i-bold\"></i> </li>',\n  active: false,\n  onClick (e, editor) {\n    if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n      let sc = window.getSelection()\n      sc.removeAllRanges()\n      sc.addRange(editor.orirange)\n      if (!this.active) {\n        this.active = true\n        return document.execCommand('bold', window.getSelection())\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./modules/menus/bold/bold.js?");

/***/ }),

/***/ "./modules/menus/header/header.js":
/*!****************************************!*\
  !*** ./modules/menus/header/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'formatBlock',\n  tpl: '<li name=\"formatBlock\"><i class=\"i-header\"></i> </li>',\n  active: false,\n  onClick (e) {\n    this.active = !this.active\n    Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children(1).style.display = this.active ? 'none' : 'block'\n  }\n});\n\n//# sourceURL=webpack:///./modules/menus/header/header.js?");

/***/ }),

/***/ "./modules/menus/horizontal/horizontal.js":
/*!************************************************!*\
  !*** ./modules/menus/horizontal/horizontal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'horizontal',\n  tpl: '<li name=\"horizontal\"><i class=\"i-horizontal\"></i> </li>',\n  active: false,\n  onClick (e) {\n  }\n});\n\n//# sourceURL=webpack:///./modules/menus/horizontal/horizontal.js?");

/***/ }),

/***/ "./modules/menus/italic/italic.js":
/*!****************************************!*\
  !*** ./modules/menus/italic/italic.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'italic',\n  tpl: '<li name=\"italic\"><i class=\"i-italic\"></i> </li>',\n  active: false,\n  onClick (e, editor) {\n    if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n      let sc = window.getSelection()\n      sc.removeAllRanges()\n      sc.addRange(editor.orirange)\n      if (!this.active) {\n        this.active = true\n        return document.execCommand('italic', window.getSelection())\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./modules/menus/italic/italic.js?");

/***/ }),

/***/ "./modules/menus/strike/strike.js":
/*!****************************************!*\
  !*** ./modules/menus/strike/strike.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'strike',\n  tpl: '<li name=\"strike\"><i  class=\"i-strike\"></i> </li>',\n  active: false,\n  onClick (e, editor) {\n    if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n      let sc = window.getSelection()\n      sc.removeAllRanges()\n      sc.addRange(editor.orirange)\n      if (!this.active) {\n        this.active = true\n        return document.execCommand('StrikeThrough', window.getSelection())\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./modules/menus/strike/strike.js?");

/***/ }),

/***/ "./modules/selections/selection.js":
/*!*****************************************!*\
  !*** ./modules/selections/selection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  saveRange (range) {\n    let sc = window.getSelection()\n    sc.removeAllRanges()\n    sc.addRange(range)\n  }\n});\n\n//# sourceURL=webpack:///./modules/selections/selection.js?");

/***/ }),

/***/ "./modules/util/dom.js":
/*!*****************************!*\
  !*** ./modules/util/dom.js ***!
  \*****************************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nfunction generateHtml(selector) {\n  let div = document.createElement('div')\n  div.innerHTML = selector\n  return div.children\n}\nclass jQ {\n  constructor (selector) {\n    this.selector = selector\n    let result\n    if (selector instanceof jQ) {\n      return selector\n    }\n    const nodeType = selector.nodeType\n    if (nodeType == 1) {\n      result = [selector]\n    }\n    if (typeof selector == 'string') {\n      if (selector.indexOf('<') == 0) {\n        result = generateHtml(selector)\n      } else {\n        result = document.querySelectorAll(selector)\n      }\n    }\n    for (let i = 0, len = result.length; i < len; i++) {\n      this[i] = result[i]\n    }\n  }\n  children (index) {\n   return this[0].children[index]\n  }\n}\nlet $ = selector => new jQ(selector)\n\n//# sourceURL=webpack:///./modules/util/dom.js?");

/***/ }),

/***/ "./modules/italic/italic.js":
/*!**********************************!*\
  !*** ./modules/italic/italic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'italic',\n  active: false,\n  onClick (e, state, value = window.getSelection().toString()) {\n    return document.execCommand('italic', value)\n  }\n});\n\n//# sourceURL=webpack:///./modules/italic/italic.js?");

/***/ }),

/***/ "./modules/util/util.js":
/*!******************************!*\
  !*** ./modules/util/util.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  query (selector) {\n    return document.querySelector(selector)\n  },\n  append (container, tpl) {\n    container.appendChild(tpl)\n  },\n  generateNode (tpl, origin = false) {\n    let element = document.createElement('div')\n    element.innerHTML = tpl\n    return origin ? element.children : element\n  },\n  isDomList (dom) {\n    return dom instanceof HTMLCollection\n  }\n});\n\n\n//# sourceURL=webpack:///./modules/util/util.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  query (selector) {\n    return document.querySelector(selector)\n  },\n  append (container, tpl) {\n    container.appendChild(tpl)\n  },\n  isDomList (dom) {\n    return dom instanceof HTMLCollection\n  },\n  getRangeInContainer (editor, range) {\n    if (!range) {\n      return\n    }\n    let node = range.commonAncestorContainer\n    while (node = node.parentNode) {\n      if (node.nodeType == 1 && node.id == editor.id) {\n       return true\n      }\n    }\n    return false\n  }\n});\n\n\n//# sourceURL=webpack:///./modules/util/util.js?");
>>>>>>> 抽出来

/***/ })

/******/ });