(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chart.jsx":
/*!***********************!*\
  !*** ./src/chart.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"d3\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\nTu Hoang\r\nApril 2017\r\n\r\nchart.jsx\r\n\r\nbase chart component\r\n\r\nrequire: d3 and nvd3\r\n*/\n\n\n\nvar Chart =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Chart, _React$Component);\n\n  function Chart(props) {\n    var _this;\n\n    _classCallCheck(this, Chart);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props)); // this.state = {\n    // \tdata: []\n    // };\n\n    _this.chartSelection = null;\n    _this.animateDuration = 1000; //1000ms\n\n    _this.chart = null; //function to be defined in subclass\n    //which describes how the chart looks like\n\n    _this.chartInit = null;\n    return _this;\n  }\n\n  _createClass(Chart, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var title = '';\n      if (this.props.title) title = this.props.title + this.props.name;else title = this.props.name;\n      var notation = this.props.notation;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"\\xA0\", notation), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, this.props.subtitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"dashboard-chart\",\n        id: this.props.id,\n        ref: function ref(el) {\n          return _this2._el = el;\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"data-source\"\n      }, this.props.source));\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(newProps, newState) {\n      this.updateChart(newProps, newState);\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(newProps, newState) {\n      //never update using react render. Chart data will be\n      //rendered using nvd3 instance\n      return true;\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //initialize nvd3 chart object\n      if (typeof this.chartInit == 'function') nv.addGraph(this.chartInit); //define call back in subclass to set state when new data comes in\n      //var controller = this.props.controller;\n    }\n  }, {\n    key: \"updateChart\",\n    value: function updateChart(newProps, newState) {\n      //update the chart here\n      var data = newProps.data; //set y label\n\n      if (this.chart) {\n        this.chart.yAxis.axisLabel(newProps.yLabel);\n        var chartModes = this.props.chartModes || [\"Stacked\", \"Expanded\"];\n        this.chart.controlOptions(chartModes);\n      }\n\n      if (this.chartSelection == null) {\n        console.log('Chart ' + this.name + ' has not been initialized');\n        return;\n      } //render new data with nvd3 chart\n\n\n      this.chartSelection.datum(data).transition().duration(this.animateDuration).call(this.chart);\n      nv.utils.windowResize(this.chart.update);\n    } // update(data) {\n    // \tthis.setState({data: data});\n    // }\n\n  }]);\n\n  return Chart;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n;\n\n//# sourceURL=webpack:///./src/chart.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: LayerControl, StatusDisplay, MapComponent, MapLegend, Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_layerControl_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/layerControl.jsx */ \"./src/map/layerControl.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LayerControl\", function() { return _map_layerControl_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _map_statusDisplay_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/statusDisplay.jsx */ \"./src/map/statusDisplay.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StatusDisplay\", function() { return _map_statusDisplay_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _map_map_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.jsx */ \"./src/map/map.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MapComponent\", function() { return _map_map_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _map_legend_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/legend.jsx */ \"./src/map/legend.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MapLegend\", function() { return _map_legend_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _chart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart.jsx */ \"./src/chart.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return _chart_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n // export {\n// \tLayerControl,\n// \tStatusDisplay,\n// \tMapComponent,\n// \tMapLegend,\n// \tChart\n// };\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map/layerControl.jsx":
/*!**********************************!*\
  !*** ./src/map/layerControl.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LayerControl; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layerItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layerItem.jsx */ \"./src/map/layerItem.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\nTu Hoang\r\n\r\nchild-component for the map\r\nProps\r\n-event handlers\r\n-map data\r\n\r\n*/\n //for testing\n\n\n\nvar LayerControl =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LayerControl, _React$Component);\n\n  function LayerControl(props) {\n    var _this;\n\n    _classCallCheck(this, LayerControl);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayerControl).call(this, props));\n    _this.style = {\n      position: 'absolute',\n      bottom: 1,\n      left: 1,\n      zIndex: 10000\n    }; //maintain state for layers\n    // this.state = {\n    // \tlayers: this.props.layers\n    // };\n    // console.log(this.state);\n\n    return _this;\n  }\n\n  _createClass(LayerControl, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {//call this to set controller instance on this \n      //component. Now this component has access to controller\n      //via this.controller\n      // this.props.onOtherComponentMounted(this);\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps() {}\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(newProps, newState) {\n      return true;\n    }\n  }, {\n    key: \"onLayerChange\",\n    value: function onLayerChange(itemName) {\n      //call handler to change layer from the map component\n      this.props.onLayerChanged(itemName);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var layers = this.props.layers;\n      layers = _.filter(layers, function (l) {\n        return l.showInLayerControl;\n      }); //generate control items based on layer info\n\n      var layerJsx = _.map(layers, function (l) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layerItem_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          layer: l,\n          key: l.name,\n          onLayerChange: _this2.onLayerChange.bind(_this2)\n        });\n      }); // console.log(layerJsx);\n\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: this.style,\n        className: \"map-control\"\n      }, layerJsx);\n    }\n  }]);\n\n  return LayerControl;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n;\n\n//# sourceURL=webpack:///./src/map/layerControl.jsx?");

/***/ }),

/***/ "./src/map/layerItem.jsx":
/*!*******************************!*\
  !*** ./src/map/layerItem.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LayerItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n/*\r\nTu Hoang\r\n\r\nchild-component for the layer control\r\nProps\r\nclick handler\r\n\r\n*/\n //for testing\n\nvar LayerItem =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LayerItem, _React$Component);\n\n  function LayerItem(props) {\n    var _this;\n\n    _classCallCheck(this, LayerItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayerItem).call(this, props));\n    _this.style = {\n      backgroundColor: '#111',\n      width: 100,\n      fontSize: 12,\n      // height: 50,\n      borderTop: 1,\n      border: '#A9A9A9',\n      borderRadius: 2,\n      padding: '2px 5px',\n      opacity: .8,\n      color: '#fff',\n      marginTop: 1,\n      cursor: 'Pointer'\n    }; // this.state = this.props.layer;\n    // console.log('Child component initialized..........!!');\n    // This binding is necessary to make `this` work in the callback\n\n    _this.onItemClick = _this.onItemClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(LayerItem, [{\n    key: \"onItemClick\",\n    value: function onItemClick(e) {\n      // console.log('Item click');\n      // console.log(e.target.value);\n      this.props.onLayerChange(this.props.layer.name);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var item = this.props.layer; // console.log('child item is being rendered: ' + item.name);\n\n      var selectedMark;\n      if (item.selected) selectedMark = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"fa fa-check\"\n      });else selectedMark = '';\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: this.style,\n        onClick: this.onItemClick,\n        className: \"layer-control-item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, item.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"pull-right\"\n      }, selectedMark));\n    }\n  }]);\n\n  return LayerItem;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n;\n\n//# sourceURL=webpack:///./src/map/layerItem.jsx?");

/***/ }),

/***/ "./src/map/legend.jsx":
/*!****************************!*\
  !*** ./src/map/legend.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Legend; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\nTu Hoang\r\nJune 2017\r\n\r\nMap Layer legend\r\n*/\n //for testing\n\nvar Legend =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Legend, _React$Component);\n\n  function Legend(props) {\n    var _this;\n\n    _classCallCheck(this, Legend);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Legend).call(this, props));\n    var legendStyle = _this.props.legendStyle;\n    _this.style = Object.assign({\n      position: 'absolute',\n      bottom: '20px',\n      right: 1,\n      padding: 10,\n      fontSize: 1.2 + 'rem',\n      zIndex: 1000,\n      background: '#fff',\n      color: '#000000',\n      fontWeight: 'bold',\n      border: '1px solid',\n      opacity: 0.8\n    }, legendStyle);\n    return _this;\n  }\n\n  _createClass(Legend, [{\n    key: \"render\",\n    value: function render() {\n      var title = this.props.title;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"legend-container\",\n        style: this.style\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        className: \"\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        colSpan: \"2\",\n        className: \"text-center\",\n        style: {\n          width: 120\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.props.year), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.props.data.map(function (o, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          key: i\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          className: \"legend\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          style: {\n            backgroundColor: o.color,\n            width: 30,\n            border: '1px solid',\n            height: 20\n          }\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          className: \"legend-label\",\n          style: {\n            paddingLeft: 5\n          }\n        }, o.label));\n      }))));\n    }\n  }, {\n    key: \"getTitle\",\n    value: function getTitle() {\n      var title = '',\n          subtitle = '';\n      return {\n        title: \"\".concat(title, \" Count\"),\n        subtitle: subtitle\n      };\n    }\n  }]);\n\n  return Legend;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/map/legend.jsx?");

/***/ }),

/***/ "./src/map/map.jsx":
/*!*************************!*\
  !*** ./src/map/map.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\nTu Hoang\r\nmap component\r\n\r\nrender div tag for leaflet map\r\n*/\n //for testing\n\nvar Map =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Map, _React$Component);\n\n  function Map(props) {\n    _classCallCheck(this, Map);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));\n  }\n\n  _createClass(Map, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(newProps, newState) {\n      // console.log('no...this component will not update');\n      return false; //map should never be updated by react\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('Map mounted...');\n      var el = this._el;\n      if (typeof this.props.mapMounted == 'function') this.props.mapMounted(el);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"leaflet-map\",\n        ref: function ref(el) {\n          return _this._el = el;\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/map/map.jsx?");

/***/ }),

/***/ "./src/map/statusDisplay.jsx":
/*!***********************************!*\
  !*** ./src/map/statusDisplay.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StatusDisplay; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\r\nTu Hoang\r\nMarch 2017\r\n\r\nA status display for map component\r\n\r\n*/\n //for testing\n\nvar StatusDisplay =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(StatusDisplay, _React$Component);\n\n  function StatusDisplay(props) {\n    var _this;\n\n    _classCallCheck(this, StatusDisplay);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatusDisplay).call(this, props)); // this.state = {\n    // \tstatus: 'Map initialized'\n    // };\n\n    _this.style = Object.assign({\n      position: 'absolute',\n      top: 1,\n      right: 1,\n      zIndex: 10000,\n      backgroundColor: '#111',\n      width: 'auto',\n      fontSize: '2rem',\n      // height: 50,\n      borderTop: 1,\n      border: '#A9A9A9',\n      borderRadius: 2,\n      padding: '2px 5px',\n      opacity: .8,\n      color: '#fff'\n    }, _this.props.statusStyle);\n    return _this;\n  } // componentDidMount() {\n  // \tvar mapComponent = this.props.mapComponent;\n  // \t//define callback to update this component when mouseover event is fired (in map component)\n  // \tmapComponent.events.onFeatureMouseover = (geom) => {\n  // \t\t// console.log('updating status');\n  // \t\tthis.setState({\n  // \t\t\tstatus: geom.feature.properties.name\n  // \t\t});\n  // \t};\n  // }\n  // componentWillUnmount(){\n  // \tvar mapComponent = this.props.mapComponent;\n  // \t//unwire the event handler when component is destroyed (in map component)\n  // \tmapComponent.events.onFeatureMouseover = null;\n  // \tdelete mapComponent.events.onFeatureMouseover;\n  // }\n\n\n  _createClass(StatusDisplay, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(newProps, newState) {\n      if (newProps.status == this.props.status) return false;else return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: this.style,\n        className: \"status-display\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, this.props.status));\n    }\n  }]);\n\n  return StatusDisplay;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n;\n\n//# sourceURL=webpack:///./src/map/statusDisplay.jsx?");

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"d3\");\n\n//# sourceURL=webpack:///external_%22d3%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});