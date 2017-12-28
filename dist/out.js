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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n\n  // navbar height reduction\n\n  $(window).scroll(function () {\n\n    if ($(window).scrollTop() > 80) {\n      $('.navbar').css({\n        'height': '100px'\n      });\n\n      $('.navbar__fadeIn-menu').css({\n        'top': '100px'\n      });\n    }\n  });\n\n  // sied menu\n\n  var menuTrig = document.querySelector('.menu-trigger');\n  var menuWrap = document.querySelector('.navbar__fadeIn-menu');\n\n  menuTrig.addEventListener('click', function (event) {\n    menuWrap.classList.toggle('navbar__fadeIn-menu--visible');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3NjcmlwdC5qcz9lNDBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gbmF2YmFyIGhlaWdodCByZWR1Y3Rpb25cblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA4MCkge1xuICAgICAgJCgnLm5hdmJhcicpLmNzcyh7XG4gICAgICAgICdoZWlnaHQnOiAnMTAwcHgnXG4gICAgICB9KTtcblxuICAgICAgJCgnLm5hdmJhcl9fZmFkZUluLW1lbnUnKS5jc3Moe1xuICAgICAgICAndG9wJzogJzEwMHB4J1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzaWVkIG1lbnVcblxuICB2YXIgbWVudVRyaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10cmlnZ2VyJyk7XG4gIHZhciBtZW51V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX2ZhZGVJbi1tZW51Jyk7XG5cbiAgbWVudVRyaWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBtZW51V3JhcC5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXJfX2ZhZGVJbi1tZW51LS12aXNpYmxlJyk7XG4gIH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zY3JpcHQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);