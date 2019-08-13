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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// container dimensions
var courtWidth = 500;
var courtHeight = 470;

var paintWidth = 160;
var paintHeight = 190;

var threePointSideYPos = 330;
var threePointSideHeight = 140;

var pi = Math.PI;

var svg = d3.select("#svgcontainer").append("svg").attr("width", courtWidth).attr("height", courtHeight);

// black background
svg.append('rect').attr('x', 0).attr('y', 0).attr('width', courtWidth).attr('height', courtHeight).attr('fill', 'black');

// key 
svg.append('rect').attr('x', 170).attr('y', 280).attr('width', paintWidth).attr('height', paintHeight).attr('stroke', 'white');

// three- point side left line
svg.append("line").attr("x1", 30).attr("y1", threePointSideYPos).attr("x2", 30).attr("y2", threePointSideYPos + threePointSideHeight).attr("stroke", "white");

// three - point side right line
svg.append("line").attr("x1", 470).attr("y1", threePointSideYPos).attr("x2", 470).attr("y2", threePointSideYPos + threePointSideHeight).attr("stroke", "white");

var arc = d3.arc().innerRadius(239).outerRadius(240).startAngle(-90 * (pi / 180)).endAngle(90 * (pi / 180));

svg.append("path").attr("d", arc).attr("fill", "white").attr("transform", "translate(250,425)");

// cover arc
svg.append('rect').attr('x', 0).attr('y', 330).attr('width', 29).attr('height', 140).attr('stroke', 'black').attr('fill', 'black');

svg.append('rect').attr('x', 471).attr('y', 330).attr('width', 29).attr('height', 140).attr('stroke', 'black').attr('fill', 'black');

// hoop backboard
svg.append("line").attr("x1", 470).attr("y1", 330).attr("x2", 470).attr("y2", 470).attr("stroke", "red");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvdXJ0V2lkdGgiLCJjb3VydEhlaWdodCIsInBhaW50V2lkdGgiLCJwYWludEhlaWdodCIsInRocmVlUG9pbnRTaWRlWVBvcyIsInRocmVlUG9pbnRTaWRlSGVpZ2h0IiwicGkiLCJNYXRoIiwiUEkiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFNQSxhQUFhLEdBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFwQjs7QUFFQSxJQUFNQyxhQUFhLEdBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFw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S0MsSUFETCxDQUNVLElBRFYsRUFDZ0IsR0FEaEIsRUFFS0EsSUFGTCxDQUVVLElBRlYsRUFFZ0IsR0FGaEIsRUFHS0EsSUFITCxDQUdVLElBSFYsRUFHZ0IsR0FIaEIsRUFJS0EsSUFKTCxDQUlVLElBSlYsRUFJZ0IsR0FKaEIsRUFLS0EsSUFMTCxDQUtVLFFBTFYsRUFLb0IsS0FMcEIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBjb250YWluZXIgZGltZW5zaW9uc1xuY29uc3QgY291cnRXaWR0aCA9IDUwMDtcbmNvbnN0IGNvdXJ0SGVpZ2h0ID0gNDcwO1xuXG5jb25zdCBwYWludFdpZHRoID0gMTYwO1xuY29uc3QgcGFpbnRIZWlnaHQgPSAxOTA7XG5cbmNvbnN0IHRocmVlUG9pbnRTaWRlWVBvcyA9IDMzMDtcbmNvbnN0IHRocmVlUG9pbnRTaWRlSGVpZ2h0ID0gMTQwO1xuXG5jb25zdCBwaSA9IE1hdGguUEk7XG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdmdjb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCBjb3VydFdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGNvdXJ0SGVpZ2h0KTtcblxuLy8gYmxhY2sgYmFja2dyb3VuZFxuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ3gnLCAwKVxuICAgIC5hdHRyKCd5JywgMClcbiAgICAuYXR0cignd2lkdGgnLCBjb3VydFdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBjb3VydEhlaWdodClcbiAgICAuYXR0cignZmlsbCcsICdibGFjaycpO1xuXG4vLyBrZXkgXG5zdmcuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cigneCcsIDE3MClcbiAgICAuYXR0cigneScsIDI4MClcbiAgICAuYXR0cignd2lkdGgnLCBwYWludFdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBwYWludEhlaWdodClcbiAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJyk7XG5cbi8vIHRocmVlLSBwb2ludCBzaWRlIGxlZnQgbGluZVxuc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAuYXR0cihcIngxXCIsIDMwKVxuICAgIC5hdHRyKFwieTFcIiwgdGhyZWVQb2ludFNpZGVZUG9zKVxuICAgIC5hdHRyKFwieDJcIiwgMzApXG4gICAgLmF0dHIoXCJ5MlwiLCB0aHJlZVBvaW50U2lkZVlQb3MgKyB0aHJlZVBvaW50U2lkZUhlaWdodClcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpO1xuXG4vLyB0aHJlZSAtIHBvaW50IHNpZGUgcmlnaHQgbGluZVxuc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAuYXR0cihcIngxXCIsIDQ3MClcbiAgICAuYXR0cihcInkxXCIsIHRocmVlUG9pbnRTaWRlWVBvcylcbiAgICAuYXR0cihcIngyXCIsIDQ3MClcbiAgICAuYXR0cihcInkyXCIsIHRocmVlUG9pbnRTaWRlWVBvcyArIHRocmVlUG9pbnRTaWRlSGVpZ2h0KVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIik7XG5cblxuY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMoMjM5KVxuICAgIC5vdXRlclJhZGl1cygyNDApXG4gICAgLnN0YXJ0QW5nbGUoLTkwICogKHBpIC8gMTgwKSkgXG4gICAgLmVuZEFuZ2xlKDkwICogKHBpIC8gMTgwKSlcblxuICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAuYXR0cihcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDI1MCw0MjUpXCIpO1xuXG4vLyBjb3ZlciBhcmNcbnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCd4JywgMClcbiAgICAuYXR0cigneScsIDMzMClcbiAgICAuYXR0cignd2lkdGgnLCAyOSlcbiAgICAuYXR0cignaGVpZ2h0JywgMTQwKVxuICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJyk7XG5cbnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCd4JywgNDcxKVxuICAgIC5hdHRyKCd5JywgMzMwKVxuICAgIC5hdHRyKCd3aWR0aCcsIDI5KVxuICAgIC5hdHRyKCdoZWlnaHQnLCAxNDApXG4gICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKTtcblxuLy8gaG9vcCBiYWNrYm9hcmRcbnN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgLmF0dHIoXCJ4MVwiLCA0NzApXG4gICAgLmF0dHIoXCJ5MVwiLCAzMzApXG4gICAgLmF0dHIoXCJ4MlwiLCA0NzApXG4gICAgLmF0dHIoXCJ5MlwiLCA0NzApXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIik7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==