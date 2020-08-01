webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Prices; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/azkanurf/ONLINE-COURSE/TraversyMedia/bitzprice-nextjs/components/Prices.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Prices = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD'\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props$bpi$bpi = this.props.bpi.bpi,\n          USD = _this$props$bpi$bpi.USD,\n          GBP = _this$props$bpi$bpi.GBP,\n          EUR = _this$props$bpi$bpi.EUR;\n      console.log(this.props.bpi, USD);\n      var list = '';\n\n      if (this.state.currency === 'USD') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 5\n          }\n        }, \"Bitcoin rate for \", USD.description, \": \", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 42\n          }\n        }, USD.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 6\n          }\n        }, USD.rate));\n      } else if (this.state.currency === 'GBP') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 5\n          }\n        }, \"Bitcoin rate for \", GBP.description, \": \", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 42\n          }\n        }, GBP.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 6\n          }\n        }, GBP.rate));\n      } else if (this.state.currency === 'EUR') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 5\n          }\n        }, \"Bitcoin rate for \", EUR.description, \": \", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 42\n          }\n        }, EUR.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 6\n          }\n        }, EUR.rate));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 4\n        }\n      }, __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }\n      }, list));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwicHJvcHMiLCJicGkiLCJVU0QiLCJHQlAiLCJFVVIiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDWjtBQUFDQyxjQUFRLEVBQUU7QUFBWCxLOzs7Ozs7OzZCQUVDO0FBQUEsZ0NBQ2dCLEtBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQSxHQUQvQjtBQUFBLFVBQ0RDLEdBREMsdUJBQ0RBLEdBREM7QUFBQSxVQUNJQyxHQURKLHVCQUNJQSxHQURKO0FBQUEsVUFDU0MsR0FEVCx1QkFDU0EsR0FEVDtBQUVSQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTixLQUFMLENBQVdDLEdBQXZCLEVBQTRCQyxHQUE1QjtBQUNBLFVBQUlLLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQUksS0FBS0MsS0FBTCxDQUFXVCxRQUFYLEtBQXdCLEtBQTVCLEVBQW1DO0FBQ2xDUSxZQUFJLEdBQ0g7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ21CTCxHQUFHLENBQUNPLFdBRHZCLFFBQ3FDO0FBQU0sbUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF1Q1AsR0FBRyxDQUFDUSxJQUEzQyxDQURyQyxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBU1IsR0FBRyxDQUFDUyxJQUFiLENBRkQsQ0FERDtBQU1BLE9BUEQsTUFPTyxJQUFJLEtBQUtILEtBQUwsQ0FBV1QsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN6Q1EsWUFBSSxHQUNIO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNtQkosR0FBRyxDQUFDTSxXQUR2QixRQUNxQztBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUNOLEdBQUcsQ0FBQ08sSUFBM0MsQ0FEckMsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVNQLEdBQUcsQ0FBQ1EsSUFBYixDQUZELENBREQ7QUFNQSxPQVBNLE1BT0EsSUFBSSxLQUFLSCxLQUFMLENBQVdULFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDekNRLFlBQUksR0FDSDtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDbUJILEdBQUcsQ0FBQ0ssV0FEdkIsUUFDcUM7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVDTCxHQUFHLENBQUNNLElBQTNDLENBRHJDLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFTTixHQUFHLENBQUNPLElBQWIsQ0FGRCxDQUREO0FBTUE7O0FBRUQsYUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE0QkosSUFBNUIsQ0FERCxDQUREO0FBS0E7Ozs7RUFuQ2tDSywrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJpY2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge2N1cnJlbmN5OiAnVVNEJ307XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtVU0QsIEdCUCwgRVVSfSA9IHRoaXMucHJvcHMuYnBpLmJwaTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLmJwaSwgVVNEKTtcblx0XHRsZXQgbGlzdCA9ICcnO1xuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJykge1xuXHRcdFx0bGlzdCA9IChcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cblx0XHRcdFx0XHRCaXRjb2luIHJhdGUgZm9yIHtVU0QuZGVzY3JpcHRpb259OiA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXByaW1hcnknPntVU0QuY29kZX08L3NwYW4+XG5cdFx0XHRcdFx0PHN0cm9uZz57VVNELnJhdGV9PC9zdHJvbmc+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcblx0XHRcdGxpc3QgPSAoXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG5cdFx0XHRcdFx0Qml0Y29pbiByYXRlIGZvciB7R0JQLmRlc2NyaXB0aW9ufTogPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57R0JQLmNvZGV9PC9zcGFuPlxuXHRcdFx0XHRcdDxzdHJvbmc+e0dCUC5yYXRlfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdFVVInKSB7XG5cdFx0XHRsaXN0ID0gKFxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuXHRcdFx0XHRcdEJpdGNvaW4gcmF0ZSBmb3Ige0VVUi5kZXNjcmlwdGlvbn06IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e0VVUi5jb2RlfTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Ryb25nPntFVVIucmF0ZX08L3N0cm9uZz5cblx0XHRcdFx0PC9saT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPntsaXN0fTwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})