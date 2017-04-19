webpackJsonp([3],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(33);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux__ = __webpack_require__(42);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, _Component.call(this, props));\n\n    _this.handleSearchTermChange = _this.handleSearchTermChange.bind(_this);\n    _this.handleSearchSubmit = _this.handleSearchSubmit.bind(_this);\n    return _this;\n  }\n\n  Landing.prototype.handleSearchTermChange = function handleSearchTermChange(e) {\n    this.props.setSearchTerm(e.target.value);\n  };\n\n  Landing.prototype.handleSearchSubmit = function handleSearchSubmit(e) {\n    e.preventDefault();\n    this.context.router.history.push('/search');\n  };\n\n  Landing.prototype.render = function render() {\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'landing' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h1',\n        null,\n        'Vidi'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'form',\n        { onSubmit: this.handleSearchSubmit },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {\n          value: this.props.searchTerm,\n          type: 'text',\n          placeholder: 'Search',\n          onChange: this.handleSearchTermChange\n        })\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__[\"c\" /* Link */],\n        { to: '/search' },\n        'or Browse All'\n      )\n    );\n  };\n\n  return Landing;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nLanding.propTypes = {\n  searchTerm: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n  setSearchTerm: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func\n};\n\nLanding.contextTypes = {\n  router: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    searchTerm: state.searchTerm\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"connect\"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_3__redux__)(Landing));\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/Landing.js\n// module id = 263\n// module chunks = 3\n\n//# sourceURL=webpack:///./js/Landing.js?");

/***/ })

});