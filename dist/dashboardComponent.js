/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"dashboardComponent": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chart.jsx":
/*!*******************!*\
  !*** ./chart.jsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _d = __webpack_require__(/*! d3 */ \"../node_modules/d3/index.js\");\n\nvar d3 = _interopRequireWildcard(_d);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Tu Hoang\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               April 2017\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               chart.jsx\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               base chart component\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               require: d3 and nvd3\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */\n\nvar Chart = function (_React$Component) {\n\t_inherits(Chart, _React$Component);\n\n\tfunction Chart(props) {\n\t\t_classCallCheck(this, Chart);\n\n\t\t// this.state = {\n\t\t// \tdata: []\n\t\t// };\n\n\t\tvar _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));\n\n\t\t_this.chartSelection = null;\n\t\t_this.animateDuration = 1000; //1000ms\n\t\t_this.chart = null;\n\t\t//function to be defined in subclass\n\t\t//which describes how the chart looks like\n\t\t_this.chartInit = null;\n\n\t\treturn _this;\n\t}\n\n\t_createClass(Chart, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar title = '';\n\t\t\tif (this.props.title) title = this.props.title + this.props.name;else title = this.props.name;\n\n\t\t\tvar notation = this.props.notation;\n\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\ttitle,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'small',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'\\xA0',\n\t\t\t\t\t\tnotation\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'small',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tthis.props.subtitle\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement('div', { className: 'dashboard-chart', id: this.props.id, ref: function ref(el) {\n\t\t\t\t\t\treturn _this2._el = el;\n\t\t\t\t\t} }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'data-source' },\n\t\t\t\t\tthis.props.source\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillReceiveProps',\n\t\tvalue: function componentWillReceiveProps(newProps, newState) {\n\t\t\tthis.updateChart(newProps, newState);\n\t\t}\n\t}, {\n\t\tkey: 'shouldComponentUpdate',\n\t\tvalue: function shouldComponentUpdate(newProps, newState) {\n\t\t\t//never update using react render. Chart data will be\n\t\t\t//rendered using nvd3 instance\n\t\t\treturn true;\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\n\t\t\t//initialize nvd3 chart object\n\t\t\tif (typeof this.chartInit == 'function') nv.addGraph(this.chartInit);\n\n\t\t\t//define call back in subclass to set state when new data comes in\n\t\t\t//var controller = this.props.controller;\n\t\t}\n\t}, {\n\t\tkey: 'updateChart',\n\t\tvalue: function updateChart(newProps, newState) {\n\t\t\t//update the chart here\n\t\t\tvar data = newProps.data;\n\t\t\t//set y label\n\t\t\tif (this.chart) {\n\t\t\t\tthis.chart.yAxis.axisLabel(newProps.yLabel);\n\t\t\t\tvar chartModes = this.props.chartModes || [\"Stacked\", \"Expanded\"];\n\t\t\t\tthis.chart.controlOptions(chartModes);\n\t\t\t}\n\n\t\t\tif (this.chartSelection == null) {\n\t\t\t\tconsole.log('Chart ' + this.name + ' has not been initialized');\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t//render new data with nvd3 chart\n\t\t\tthis.chartSelection.datum(data).transition().duration(this.animateDuration).call(this.chart);\n\n\t\t\tnv.utils.windowResize(this.chart.update);\n\t\t}\n\t\t// update(data) {\n\t\t// \tthis.setState({data: data});\n\t\t// }\n\n\t}]);\n\n\treturn Chart;\n}(_react2.default.Component);\n\nexports.default = Chart;\n;\n\n//# sourceURL=webpack:///./chart.jsx?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Chart = exports.MapLegend = exports.MapComponent = exports.StatusDisplay = exports.LayerControl = undefined;\n\nvar _layerControl = __webpack_require__(/*! ./map/layerControl.jsx */ \"./map/layerControl.jsx\");\n\nvar _layerControl2 = _interopRequireDefault(_layerControl);\n\nvar _statusDisplay = __webpack_require__(/*! ./map/statusDisplay.jsx */ \"./map/statusDisplay.jsx\");\n\nvar _statusDisplay2 = _interopRequireDefault(_statusDisplay);\n\nvar _map = __webpack_require__(/*! ./map/map.jsx */ \"./map/map.jsx\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _legend = __webpack_require__(/*! ./map/legend.jsx */ \"./map/legend.jsx\");\n\nvar _legend2 = _interopRequireDefault(_legend);\n\nvar _chart = __webpack_require__(/*! ./chart.jsx */ \"./chart.jsx\");\n\nvar _chart2 = _interopRequireDefault(_chart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.LayerControl = _layerControl2.default;\nexports.StatusDisplay = _statusDisplay2.default;\nexports.MapComponent = _map2.default;\nexports.MapLegend = _legend2.default;\nexports.Chart = _chart2.default;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./map/layerControl.jsx":
/*!******************************!*\
  !*** ./map/layerControl.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _layerItem = __webpack_require__(/*! ./layerItem.jsx */ \"./map/layerItem.jsx\");\n\nvar _layerItem2 = _interopRequireDefault(_layerItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Tu Hoang\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               child-component for the map\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Props\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               -event handlers\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               -map data\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */\n\nvar LayerControl = function (_React$Component) {\n\t_inherits(LayerControl, _React$Component);\n\n\tfunction LayerControl(props) {\n\t\t_classCallCheck(this, LayerControl);\n\n\t\tvar _this = _possibleConstructorReturn(this, (LayerControl.__proto__ || Object.getPrototypeOf(LayerControl)).call(this, props));\n\n\t\t_this.style = {\n\t\t\tposition: 'absolute',\n\t\t\tbottom: 1,\n\t\t\tleft: 1,\n\t\t\tzIndex: 10000\n\t\t};\n\t\t//maintain state for layers\n\t\t// this.state = {\n\t\t// \tlayers: this.props.layers\n\t\t// };\n\t\t// console.log(this.state);\n\t\treturn _this;\n\t}\n\n\t_createClass(LayerControl, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\t//call this to set controller instance on this \n\t\t\t//component. Now this component has access to controller\n\t\t\t//via this.controller\n\t\t\t// this.props.onOtherComponentMounted(this);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillReceiveProps',\n\t\tvalue: function componentWillReceiveProps() {}\n\t}, {\n\t\tkey: 'shouldComponentUpdate',\n\t\tvalue: function shouldComponentUpdate(newProps, newState) {\n\t\t\treturn true;\n\t\t}\n\t}, {\n\t\tkey: 'onLayerChange',\n\t\tvalue: function onLayerChange(itemName) {\n\t\t\t//call handler to change layer from the map component\n\t\t\tthis.props.onLayerChanged(itemName);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar layers = this.props.layers;\n\t\t\tlayers = _.filter(layers, function (l) {\n\t\t\t\treturn l.showInLayerControl;\n\t\t\t});\n\t\t\t//generate control items based on layer info\n\t\t\tvar layerJsx = _.map(layers, function (l) {\n\t\t\t\treturn React.createElement(_layerItem2.default, { layer: l, key: l.name, onLayerChange: _this2.onLayerChange.bind(_this2) });\n\t\t\t});\n\n\t\t\t// console.log(layerJsx);\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: this.style, className: 'map-control' },\n\t\t\t\tlayerJsx\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LayerControl;\n}(React.Component);\n\nexports.default = LayerControl;\n;\n\n//# sourceURL=webpack:///./map/layerControl.jsx?");

/***/ }),

/***/ "./map/layerItem.jsx":
/*!***************************!*\
  !*** ./map/layerItem.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\r\nTu Hoang\r\n\r\nchild-component for the layer control\r\nProps\r\nclick handler\r\n\r\n*/\n\nvar LayerItem = function (_React$Component) {\n\t_inherits(LayerItem, _React$Component);\n\n\tfunction LayerItem(props) {\n\t\t_classCallCheck(this, LayerItem);\n\n\t\tvar _this = _possibleConstructorReturn(this, (LayerItem.__proto__ || Object.getPrototypeOf(LayerItem)).call(this, props));\n\n\t\t_this.style = {\n\t\t\tbackgroundColor: '#111',\n\t\t\twidth: 100,\n\t\t\tfontSize: 12,\n\t\t\t// height: 50,\n\t\t\tborderTop: 1,\n\t\t\tborder: '#A9A9A9',\n\t\t\tborderRadius: 2,\n\t\t\tpadding: '2px 5px',\n\t\t\topacity: .8,\n\t\t\tcolor: '#fff',\n\t\t\tmarginTop: 1,\n\t\t\tcursor: 'Pointer'\n\t\t};\n\n\t\t// this.state = this.props.layer;\n\n\t\t// console.log('Child component initialized..........!!');\n\n\t\t// This binding is necessary to make `this` work in the callback\n\t\t_this.onItemClick = _this.onItemClick.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(LayerItem, [{\n\t\tkey: 'onItemClick',\n\t\tvalue: function onItemClick(e) {\n\t\t\t// console.log('Item click');\n\t\t\t// console.log(e.target.value);\n\n\t\t\tthis.props.onLayerChange(this.props.layer.name);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar item = this.props.layer;\n\t\t\t// console.log('child item is being rendered: ' + item.name);\n\t\t\tvar selectedMark;\n\n\t\t\tif (item.selected) selectedMark = React.createElement('i', { className: 'fa fa-check' });else selectedMark = '';\n\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: this.style, onClick: this.onItemClick, className: 'layer-control-item' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\titem.label\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'pull-right' },\n\t\t\t\t\tselectedMark\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LayerItem;\n}(React.Component);\n\nexports.default = LayerItem;\n;\n\n//# sourceURL=webpack:///./map/layerItem.jsx?");

/***/ }),

/***/ "./map/legend.jsx":
/*!************************!*\
  !*** ./map/legend.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\r\nTu Hoang\r\nJune 2017\r\n\r\nMap Layer legend\r\n*/\n\nvar Legend = function (_React$Component) {\n\t_inherits(Legend, _React$Component);\n\n\tfunction Legend(props) {\n\t\t_classCallCheck(this, Legend);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));\n\n\t\tvar legendStyle = _this.props.legendStyle;\n\n\t\t_this.style = Object.assign({\n\t\t\tposition: 'absolute',\n\t\t\tbottom: '20px',\n\t\t\tright: 1,\n\t\t\tpadding: 10,\n\t\t\tfontSize: 1.2 + 'rem',\n\t\t\tzIndex: 1000,\n\t\t\tbackground: '#fff',\n\t\t\tcolor: '#000000',\n\t\t\tfontWeight: 'bold',\n\t\t\tborder: '1px solid',\n\t\t\topacity: 0.8\n\t\t}, legendStyle);\n\t\treturn _this;\n\t}\n\n\t_createClass(Legend, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar title = this.props.title;\n\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'legend-container', style: this.style },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'table',\n\t\t\t\t\t{ className: '' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'thead',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'tr',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\t\t{ colSpan: '2', className: 'text-center', style: { width: 120 } },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tthis.props.year\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement('br', null),\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'tbody',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tthis.props.data.map(function (o, i) {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t'tr',\n\t\t\t\t\t\t\t\t{ key: i },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'td',\n\t\t\t\t\t\t\t\t\t{ className: 'legend' },\n\t\t\t\t\t\t\t\t\tReact.createElement('div', { style: { backgroundColor: o.color, width: 30, border: '1px solid', height: 20 } })\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'td',\n\t\t\t\t\t\t\t\t\t{ className: 'legend-label', style: { paddingLeft: 5 } },\n\t\t\t\t\t\t\t\t\to.label\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'getTitle',\n\t\tvalue: function getTitle() {\n\t\t\tvar title = '',\n\t\t\t    subtitle = '';\n\n\t\t\treturn { title: title + ' Count', subtitle: subtitle };\n\t\t}\n\t}]);\n\n\treturn Legend;\n}(React.Component);\n\nexports.default = Legend;\n\n//# sourceURL=webpack:///./map/legend.jsx?");

/***/ }),

/***/ "./map/map.jsx":
/*!*********************!*\
  !*** ./map/map.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\r\nTu Hoang\r\nmap component\r\n\r\nrender div tag for leaflet map\r\n*/\n\nvar Map = function (_React$Component) {\n\t_inherits(Map, _React$Component);\n\n\tfunction Map(props) {\n\t\t_classCallCheck(this, Map);\n\n\t\treturn _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));\n\t}\n\n\t_createClass(Map, [{\n\t\tkey: 'shouldComponentUpdate',\n\t\tvalue: function shouldComponentUpdate(newProps, newState) {\n\t\t\t// console.log('no...this component will not update');\n\t\t\treturn false; //map should never be updated by react\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tconsole.log('Map mounted...');\n\t\t\tvar el = this._el;\n\t\t\tif (typeof this.props.mapMounted == 'function') this.props.mapMounted(el);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn React.createElement('div', { className: 'leaflet-map', ref: function ref(el) {\n\t\t\t\t\treturn _this2._el = el;\n\t\t\t\t} });\n\t\t}\n\t}]);\n\n\treturn Map;\n}(React.Component);\n\nexports.default = Map;\n\n//# sourceURL=webpack:///./map/map.jsx?");

/***/ }),

/***/ "./map/statusDisplay.jsx":
/*!*******************************!*\
  !*** ./map/statusDisplay.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Tu Hoang\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               March 2017\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               A status display for map component\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */\n\n\n//for testing\n\nvar StatusDisplay = function (_React$Component) {\n\t_inherits(StatusDisplay, _React$Component);\n\n\tfunction StatusDisplay(props) {\n\t\t_classCallCheck(this, StatusDisplay);\n\n\t\t// this.state = {\n\t\t// \tstatus: 'Map initialized'\n\t\t// };\n\t\tvar _this = _possibleConstructorReturn(this, (StatusDisplay.__proto__ || Object.getPrototypeOf(StatusDisplay)).call(this, props));\n\n\t\t_this.style = Object.assign({\n\t\t\tposition: 'absolute',\n\t\t\ttop: 1,\n\t\t\tright: 1,\n\t\t\tzIndex: 10000,\n\t\t\tbackgroundColor: '#111',\n\t\t\twidth: 'auto',\n\t\t\tfontSize: '2rem',\n\t\t\t// height: 50,\n\t\t\tborderTop: 1,\n\t\t\tborder: '#A9A9A9',\n\t\t\tborderRadius: 2,\n\t\t\tpadding: '2px 5px',\n\t\t\topacity: .8,\n\t\t\tcolor: '#fff'\n\t\t}, _this.props.statusStyle);\n\t\treturn _this;\n\t}\n\t// componentDidMount() {\n\t// \tvar mapComponent = this.props.mapComponent;\n\t// \t//define callback to update this component when mouseover event is fired (in map component)\n\t// \tmapComponent.events.onFeatureMouseover = (geom) => {\n\t// \t\t// console.log('updating status');\n\t// \t\tthis.setState({\n\t// \t\t\tstatus: geom.feature.properties.name\n\t// \t\t});\n\t// \t};\n\t// }\n\t// componentWillUnmount(){\n\t// \tvar mapComponent = this.props.mapComponent;\n\t// \t//unwire the event handler when component is destroyed (in map component)\n\t// \tmapComponent.events.onFeatureMouseover = null;\n\t// \tdelete mapComponent.events.onFeatureMouseover;\n\t// }\n\n\n\t_createClass(StatusDisplay, [{\n\t\tkey: 'shouldComponentUpdate',\n\t\tvalue: function shouldComponentUpdate(newProps, newState) {\n\t\t\tif (newProps.status == this.props.status) return false;else return true;\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: this.style, className: 'status-display' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\tthis.props.status\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn StatusDisplay;\n}(_react2.default.Component);\n\nexports.default = StatusDisplay;\n;\n\n//# sourceURL=webpack:///./map/statusDisplay.jsx?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"../node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./index.js?");

/***/ })

/******/ });