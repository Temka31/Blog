webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
var _jsxFileName = "/Users/tema/my-app/123/pages/p/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Post = props => __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
  display: "flex",
  flexBasis: "25%",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("button", {
  onclick: "window.history.back(1)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\u041A\u043D\u043E\u043F\u043A\u0430 \u043D\u0430\u0437\u0430\u0434")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
  display: "flex",
  flexBasis: "50%",
  flexDirection: "column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("img", {
  src: props.show.image.medium,
  width: "300",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.show.name), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, props.show.summary.replace(/<[/]?[pb]>/g, ''))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
  display: "flex",
  flexBasis: "25%",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

Post.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.tvmaze.com/shows/".concat(id));
  const show = await res.json();
  console.log("Fetched show: ".concat(show.name));
  return {
    show
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.684cbe7e2f701e488d54.hot-update.js.map