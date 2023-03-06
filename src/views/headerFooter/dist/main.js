/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/headerFooter/changeHeader.js":
/*!************************************************!*\
  !*** ./src/views/headerFooter/changeHeader.js ***!
  \************************************************/
/***/ (() => {

eval("const changeHeader = () => {\r\n  window.addEventListener(\"load\", async () => {\r\n    const admin = document.querySelector(\"#admin\");\r\n    const user = document.querySelector(\"#user\");\r\n    const guest = document.querySelector(\"#guest\");\r\n\r\n    const token = sessionStorage.getItem(\"token\");\r\n    if (token) {\r\n      const res = await fetch(\"/api/admin/check\", {\r\n        headers: {\r\n          Authorization: `Bearer ${token}`,\r\n        },\r\n      });\r\n\r\n      const { result } = await res.json();\r\n\r\n      if (result === \"success\") {\r\n        admin.classList.remove(\"hidden\");\r\n        user.classList.add(\"hidden\");\r\n        guest.classList.add(\"hidden\");\r\n\r\n        return;\r\n      } else {\r\n        user.classList.remove(\"hidden\");\r\n        guest.classList.add(\"hidden\");\r\n        admin.classList.add(\"hidden\");\r\n        return;\r\n      }\r\n    }\r\n\r\n    guest.classList.remove(\"hidden\");\r\n    user.classList.add(\"hidden\");\r\n    admin.classList.add(\"hidden\");\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/changeHeader.js?");

/***/ }),

/***/ "./src/views/headerFooter/footer.js":
/*!******************************************!*\
  !*** ./src/views/headerFooter/footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = (window.onload = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.insertAdjacentHTML(\r\n    \"beforeEnd\",\r\n    `\r\n  <footer class=\"footer\">\r\n  <address class=\"address_left\">\r\n    <ul class=\"addressLink\">\r\n      <li>\r\n        <a href=\"/\" id=\"footer_logo\">\r\n          Ce1ev.\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">개인정보 취급방침</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">이용약관</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"addressText\">\r\n      <p>셀레브 주식회사 · 대표 김원송 사업자등록번호 : 000-00-00000</p>\r\n      <p>\r\n        사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층\r\n      </p>\r\n      <p>ⓒ CELEV. Corp.</p>\r\n    </div>\r\n  </address>\r\n  <address class=\"address_right\">\r\n    <p>\r\n      <strong style=\"font-size: 20px; font-weight: 600\">\r\n        고객센터 1588-0000\r\n      </strong>\r\n    </p>\r\n    <p>\r\n      운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)\r\n      <br />\r\n      점심시간 평일 13:00 - 14:00\r\n      <br />\r\n      1:1 문의하기는 앱에서만 가능합니다.\r\n    </p>\r\n  </address>\r\n</footer>\r\n  `\r\n  );\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/footer.js?");

/***/ }),

/***/ "./src/views/headerFooter/header.js":
/*!******************************************!*\
  !*** ./src/views/headerFooter/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = window.addEventListener(\"load\", () => {\r\n  const body = document.querySelector(\".body\");\r\n  body.insertAdjacentHTML(\r\n    \"afterBegin\",\r\n    `\r\n    <header class=\"header\">\r\n      <div class=\"header_logo\">\r\n        <a href=\"/\">\r\n          Ce1ev.\r\n        </a>\r\n      </div>\r\n      <ul class=\"search\">\r\n        <li>\r\n          <input type=\"text\" placeholder=\"검색어를 입력하세요.\" class=\"header_search\" id=\"text\" />\r\n          <button type=\"button\" class=\"searchBtn\">\r\n            <i class=\"fa fa-magnifying-glass fa-2x\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"header_right\" id=\"guest\">\r\n        <li id=\"header_login\">\r\n            <a href=\"/login\">\r\n                LOGIN\r\n            </a>\r\n        </li>\r\n        <li id=\"header_wish\">\r\n            <a href=\"/register\">\r\n              REGISTER\r\n            </a>\r\n        </li>\r\n        <li id=\"header_cart\">            \r\n            <a href=\"/guest\">\r\n                GUEST\r\n            </a>\r\n        </li>\r\n        <li id=\"header_notice\">\r\n          <a href=\"/notice\"> NOTICE </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"header_right hidden\" id=\"user\">\r\n      <li id=\"header_cart\">\r\n            <a href=\"/mypage/myPageCart\">\r\n                CART\r\n            </a>\r\n        </li>\r\n        <li id=\"header_myPage\">\r\n            <a href=\"/mypage\">\r\n                MY PAGE\r\n            </a>\r\n        </li>\r\n        <li id=\"header_logout\">\r\n            <a href=\"/#\" id=\"logout2\">\r\n              LOG OUT\r\n            </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"header_right hidden\" id=\"admin\">\r\n        <li id=\"header_addProduct\">\r\n        <a href=\"/products\">\r\n          ADD-PRODUCT\r\n        </a>  \r\n      </li>\r\n    <li id=\"header_mypage\">\r\n      <a href=\"/admin\">\r\n        ADMIN-PAGE\r\n      </a>  \r\n    </li>\r\n    <li id=\"header_logout\">\r\n      <a href=\"/#\" id=\"logout1\">\r\n        LOG OUT\r\n      </a>\r\n    </li>\r\n      </ul>\r\n    </header>\r\n    `\r\n  );\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/header.js?");

/***/ }),

/***/ "./src/views/headerFooter/index.js":
/*!*****************************************!*\
  !*** ./src/views/headerFooter/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/views/headerFooter/header.js\");\n/* harmony import */ var _changeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeHeader */ \"./src/views/headerFooter/changeHeader.js\");\n/* harmony import */ var _changeHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_changeHeader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/views/headerFooter/footer.js\");\n/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout */ \"./src/views/headerFooter/logout.js\");\n/* harmony import */ var _searching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searching */ \"./src/views/headerFooter/searching.js\");\n/* harmony import */ var _searching__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_searching__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n_changeHeader__WEBPACK_IMPORTED_MODULE_1___default()();\r\n_searching__WEBPACK_IMPORTED_MODULE_4___default()();\r\n(0,_logout__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/index.js?");

/***/ }),

/***/ "./src/views/headerFooter/logout.js":
/*!******************************************!*\
  !*** ./src/views/headerFooter/logout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\nconst logout = () => {\r\n  const logoutBtn1 = document.querySelector(\"#logout1\");\r\n  const logoutBtn2 = document.querySelector(\"#logout2\");\r\n\r\n  logoutBtn1.addEventListener(\"click\", () => {\r\n    sessionStorage.removeItem(\"token\");\r\n    window.location.href = \"/\";\r\n  });\r\n\r\n  logoutBtn2.addEventListener(\"click\", () => {\r\n    sessionStorage.removeItem(\"token\");\r\n    window.location.href = \"/\";\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/logout.js?");

/***/ }),

/***/ "./src/views/headerFooter/searching.js":
/*!*********************************************!*\
  !*** ./src/views/headerFooter/searching.js ***!
  \*********************************************/
/***/ (() => {

eval("const searchBtn = header.querySelector(\".searchBtn\");\r\nconst searchBar = header.querySelector(\".header_search\");\r\n\r\nfunction searchProduct() {\r\n  const productAll = header.querySelectorAll(\".pd_block\");\r\n\r\n  const modelName = header.querySelectorAll(\".tag_name\");\r\n  const brand = header.querySelectorAll(\".pd_brd\");\r\n  const name = header.querySelectorAll(\".pd_name\");\r\n  const category = header.querySelectorAll(\".tag_name\");\r\n\r\n  for (let i = 0; i < productAll.length; i++) {\r\n    productAll[i].classList.add(\"hidden\");\r\n    if (\r\n      modelName[i].innerHTML === searchBar.value.trim() ||\r\n      modelName[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      brand[i].innerHTML === searchBar.value.trim() ||\r\n      brand[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      name[i].innerHTML === searchBar.value.trim() ||\r\n      name[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      category[i].innerHTML === searchBar.value.trim() ||\r\n      category[i].innerHTML.includes(searchBar.value.trim())\r\n    ) {\r\n      productAll[i].classList.remove(\"hidden\");\r\n    }\r\n  }\r\n}\r\n\r\nsearchBtn.addEventListener(\"click\", searchProduct);\r\nsearchBar.addEventListener(\"keyup\", function (e) {\r\n  if (e.keyCode === 13) {\r\n    searchProduct();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/headerFooter/searching.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/headerFooter/index.js");
/******/ 	
/******/ })()
;