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

/***/ "./src/court.js":
/*!**********************!*\
  !*** ./src/court.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Court = function () {
    function Court(svg) {
        _classCallCheck(this, Court);

        this.svg = svg;
    }

    _createClass(Court, [{
        key: 'render',
        value: function render() {
            // container dimensions
            var paintWidth = 160;
            var paintHeight = 190;

            var threePointSideYPos = 330;
            var threePointSideHeight = 140;

            var pi = Math.PI;

            // black background
            this.svg.append('rect').attr('x', 0).attr('y', 0).attr('width', courtWidth).attr('height', courtHeight).attr('fill', 'black');

            // key 
            this.svg.append('rect').attr('x', 170).attr('y', 280).attr('width', paintWidth).attr('height', paintHeight).attr('stroke', 'white');

            // three- point side left line
            this.svg.append("line").attr("x1", 30).attr("y1", threePointSideYPos).attr("x2", 30).attr("y2", threePointSideYPos + threePointSideHeight).attr("stroke", "white");

            // three - point side right line
            this.svg.append("line").attr("x1", 470).attr("y1", threePointSideYPos).attr("x2", 470).attr("y2", threePointSideYPos + threePointSideHeight).attr("stroke", "white");

            var threePointArc = d3.arc().innerRadius(239).outerRadius(240).startAngle(-90 * (pi / 180)).endAngle(90 * (pi / 180));

            this.svg.append("path").attr("d", threePointArc).attr("fill", "white").attr("transform", "translate(250,425)");

            // cover arc
            this.svg.append('rect').attr('x', 0).attr('y', 330).attr('width', 29).attr('height', 140).attr('stroke', 'black').attr('fill', 'black');

            this.svg.append('rect').attr('x', 471).attr('y', 330).attr('width', 29).attr('height', 140).attr('stroke', 'black').attr('fill', 'black');

            // backboard
            this.svg.append("line").attr("x1", 220).attr("y1", 430).attr("x2", 280).attr("y2", 430).attr("stroke", "white").attr("stroke-width", "0.3%");

            // rim 
            this.svg.append("circle").attr("cx", 250).attr("cy", 417.5).attr("r", 7.5).attr("stroke", "white");

            // rim extension
            this.svg.append('rect').attr('x', 246.5).attr('y', 424.5).attr('width', 7).attr('height', 5).attr('fill', 'white');

            // rim arc
            var rimArc = d3.arc().innerRadius(40).outerRadius(41).startAngle(-90 * (pi / 180)).endAngle(90 * (pi / 180));

            this.svg.append("path").attr("d", rimArc).attr("fill", "white").attr("transform", "translate(250,425)");
        }
    }]);

    return Court;
}();

exports.default = Court;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _court = __webpack_require__(/*! ./court */ "./src/court.js");

var _court2 = _interopRequireDefault(_court);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
    // const courtWidth = 500;
    // const courtHeight = 470;

    // const svg = d3.select("#svgcontainer")
    //     .append("svg").attr("width", courtWidth).attr("height", courtHeight);

    // const court = new Court(svg);
    // court.render();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvdXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb3VydCIsInN2ZyIsInBhaW50V2lkdGgiLCJwYWludEhlaWdodCIsInRocmVlUG9pbnRTaWRlWVBvcyIsInRocmVlUG9pbnRTaWRlSGVpZ2h0IiwicGkiLCJNYXRoIiwiUEkiLCJhcHBlbmQiLCJhdHRyIiwiY291cnRXaWR0aCIsImNvdXJ0SGVpZ2h0IiwidGhyZWVQb2ludEFyYyIsImQzIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInJpbUFyYyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNq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SUFETCxDQUNVLEdBRFYsRUFDZVUsTUFEZixFQUVLVixJQUZMLENBRVUsTUFGVixFQUVrQixPQUZsQixFQUdLQSxJQUhMLENBR1UsV0FIVixFQUd1QixvQkFIdkI7QUFJSDs7Ozs7O2tCQUdVVixLOzs7Ozs7Ozs7Ozs7OztBQ25IZjs7Ozs7O0FBRUFxQixTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNILENBVEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmNsYXNzIENvdXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdmcpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb250YWluZXIgZGltZW5zaW9uc1xuICAgICAgICBjb25zdCBwYWludFdpZHRoID0gMTYwO1xuICAgICAgICBjb25zdCBwYWludEhlaWdodCA9IDE5MDtcblxuICAgICAgICBjb25zdCB0aHJlZVBvaW50U2lkZVlQb3MgPSAzMzA7XG4gICAgICAgIGNvbnN0IHRocmVlUG9pbnRTaWRlSGVpZ2h0ID0gMTQwO1xuXG4gICAgICAgIGNvbnN0IHBpID0gTWF0aC5QSTtcblxuICAgICAgICAvLyBibGFjayBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBjb3VydFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGNvdXJ0SGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKTtcblxuICAgICAgICAvLyBrZXkgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDE3MClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMjgwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgcGFpbnRXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBwYWludEhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKTtcblxuICAgICAgICAvLyB0aHJlZS0gcG9pbnQgc2lkZSBsZWZ0IGxpbmVcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgdGhyZWVQb2ludFNpZGVZUG9zKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCAzMClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgdGhyZWVQb2ludFNpZGVZUG9zICsgdGhyZWVQb2ludFNpZGVIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIC8vIHRocmVlIC0gcG9pbnQgc2lkZSByaWdodCBsaW5lXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgNDcwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB0aHJlZVBvaW50U2lkZVlQb3MpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIDQ3MClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgdGhyZWVQb2ludFNpZGVZUG9zICsgdGhyZWVQb2ludFNpZGVIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IHRocmVlUG9pbnRBcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKDIzOSlcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cygyNDApXG4gICAgICAgICAgICAuc3RhcnRBbmdsZSgtOTAgKiAocGkgLyAxODApKVxuICAgICAgICAgICAgLmVuZEFuZ2xlKDkwICogKHBpIC8gMTgwKSlcblxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgdGhyZWVQb2ludEFyYylcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgyNTAsNDI1KVwiKTtcblxuICAgICAgICAvLyBjb3ZlciBhcmNcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMzMwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMjkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTQwKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpO1xuXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDQ3MSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMzMwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMjkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTQwKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpO1xuXG4gICAgICAgIC8vIGJhY2tib2FyZFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDIyMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgNDMwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCAyODApXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIDQzMClcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMC4zJVwiKTtcblxuICAgICAgICAvLyByaW0gXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAyNTApXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIDQxNy41KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDcuNSlcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgLy8gcmltIGV4dGVuc2lvblxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAyNDYuNSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgNDI0LjUpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCA3KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDUpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG5cbiAgICAgICAgLy8gcmltIGFyY1xuICAgICAgICBjb25zdCByaW1BcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKDQwKVxuICAgICAgICAgICAgLm91dGVyUmFkaXVzKDQxKVxuICAgICAgICAgICAgLnN0YXJ0QW5nbGUoLTkwICogKHBpIC8gMTgwKSlcbiAgICAgICAgICAgIC5lbmRBbmdsZSg5MCAqIChwaSAvIDE4MCkpXG5cbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHJpbUFyYylcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgyNTAsNDI1KVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJ0OyIsImltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGNvbnN0IGNvdXJ0V2lkdGggPSA1MDA7XG4gICAgLy8gY29uc3QgY291cnRIZWlnaHQgPSA0NzA7XG5cbiAgICAvLyBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnY29udGFpbmVyXCIpXG4gICAgLy8gICAgIC5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIGNvdXJ0V2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgY291cnRIZWlnaHQpO1xuXG4gICAgLy8gY29uc3QgY291cnQgPSBuZXcgQ291cnQoc3ZnKTtcbiAgICAvLyBjb3VydC5yZW5kZXIoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=