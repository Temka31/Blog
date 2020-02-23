webpackHotUpdate("static/development/pages/calc.js",{

/***/ "./pages/calc.js":
/*!***********************!*\
  !*** ./pages/calc.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_knopka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/knopka */ "./components/knopka.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tema/my-app/123/pages/calc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  figures: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};
function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      result = _useState[0],
      setResult = _useState[1];

  var _calc = function calc(n) {
    setResult(n);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E     ", result), __jsx("div", {
    style: styles.figures,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "1",
    calc: function calc() {
      return _calc(result + "1");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "2",
    calc: function calc() {
      return setResult(result + "2");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "3",
    calc: function calc() {
      return setResult(result + "3");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "4",
    calc: function calc() {
      return setResult(result + "4");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "5",
    calc: function calc() {
      return setResult(result + "5");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "6",
    calc: function calc() {
      return setResult(result + "6");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "7",
    calc: function calc() {
      return setResult(result + "7");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "8",
    calc: function calc() {
      return setResult(result + "8");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "9",
    calc: function calc() {
      return setResult(result + "9");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "0",
    calc: function calc() {
      return setResult(result + "0");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "=",
    calc: function calc() {
      return setResult(eval(result));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "+",
    calc: function calc() {
      return setResult(result + "+");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "-",
    calc: function calc() {
      return setResult(result + "-");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "/",
    calc: function calc() {
      return setResult(result + "/");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "*",
    calc: function calc() {
      return setResult(result + "*");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_knopka__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: "C",
    calc: function calc() {
      return setResult("");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=calc.js.fd6c59496bfdae287d21.hot-update.js.map