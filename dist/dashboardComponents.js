!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("d3")):"function"==typeof define&&define.amd?define(["d3"],t):"object"==typeof exports?exports["dashboard-components"]=t(require("d3")):e["dashboard-components"]=t(e.d3)}(window,function(e){return function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/";var u=window.webpackJsonpdashboard_components=window.webpackJsonpdashboard_components||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;return a.push([126,1]),n()}({126:function(e,t,n){n(127),e.exports=n(329)},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Chart=t.MapLegend=t.MapComponent=t.StatusDisplay=t.LayerControl=void 0;var r=l(n(330)),o=l(n(332)),a=l(n(335)),i=l(n(336)),u=l(n(337));function l(e){return e&&e.__esModule?e:{default:e}}t.LayerControl=r.default,t.StatusDisplay=o.default,t.MapComponent=a.default,t.MapLegend=i.default,t.Chart=u.default},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(331));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.style={position:"absolute",bottom:1,left:1,zIndex:1e4},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"onLayerChange",value:function(e){this.props.onLayerChanged(e)}},{key:"render",value:function(){var e=this,t=this.props.layers;t=_.filter(t,function(e){return e.showInLayerControl});var n=_.map(t,function(t){return React.createElement(o.default,{layer:t,key:t.name,onLayerChange:e.onLayerChange.bind(e)})});return React.createElement("div",{style:this.style,className:"map-control"},n)}}]),t}();t.default=a},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.style={backgroundColor:"#111",width:100,fontSize:12,borderTop:1,border:"#A9A9A9",borderRadius:2,padding:"2px 5px",opacity:.8,color:"#fff",marginTop:1,cursor:"Pointer"},n.onItemClick=n.onItemClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"onItemClick",value:function(e){this.props.onLayerChange(this.props.layer.name)}},{key:"render",value:function(){var e,t=this.props.layer;return e=t.selected?React.createElement("i",{className:"fa fa-check"}):"",React.createElement("div",{style:this.style,onClick:this.onItemClick,className:"layer-control-item"},React.createElement("span",null,t.label),React.createElement("span",{className:"pull-right"},e))}}]),t}();t.default=o},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(125));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.style=Object.assign({position:"absolute",top:1,right:1,zIndex:1e4,backgroundColor:"#111",width:"auto",fontSize:"2rem",borderTop:1,border:"#A9A9A9",borderRadius:2,padding:"2px 5px",opacity:.8,color:"#fff"},n.props.statusStyle),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.status!=this.props.status}},{key:"render",value:function(){return o.default.createElement("div",{style:this.style,className:"status-display"},o.default.createElement("span",null,this.props.status))}}]),t}();t.default=a},335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"componentDidMount",value:function(){console.log("Map mounted...");var e=this._el;"function"==typeof this.props.mapMounted&&this.props.mapMounted(e)}},{key:"render",value:function(){var e=this;return React.createElement("div",{className:"leaflet-map",ref:function(t){return e._el=t}})}}]),t}();t.default=o},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.props.legendStyle;return n.style=Object.assign({position:"absolute",bottom:"20px",right:1,padding:10,fontSize:"1.2rem",zIndex:1e3,background:"#fff",color:"#000000",fontWeight:"bold",border:"1px solid",opacity:.8},r),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"render",value:function(){var e=this.props.title;return React.createElement("div",{className:"legend-container",style:this.style},React.createElement("table",{className:""},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{colSpan:"2",className:"text-center",style:{width:120}},React.createElement("span",null,this.props.year),React.createElement("br",null),e))),React.createElement("tbody",null,this.props.data.map(function(e,t){return React.createElement("tr",{key:t},React.createElement("td",{className:"legend"},React.createElement("div",{style:{backgroundColor:e.color,width:30,border:"1px solid",height:20}})),React.createElement("td",{className:"legend-label",style:{paddingLeft:5}},e.label))}))))}},{key:"getTitle",value:function(){return{title:" Count",subtitle:""}}}]),t}();t.default=o},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(125));!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(338));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.chartSelection=null,n.animateDuration=1e3,n.chart=null,n.chartInit=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this,t="";t=this.props.title?this.props.title+this.props.name:this.props.name;var n=this.props.notation;return o.default.createElement("div",null,o.default.createElement("h3",null,t,o.default.createElement("small",null," ",n),o.default.createElement("br",null),o.default.createElement("small",null,this.props.subtitle)),o.default.createElement("div",{className:"dashboard-chart",id:this.props.id,ref:function(t){return e._el=t}}),o.default.createElement("p",{className:"data-source"},this.props.source))}},{key:"componentWillReceiveProps",value:function(e,t){this.updateChart(e,t)}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentDidMount",value:function(){"function"==typeof this.chartInit&&nv.addGraph(this.chartInit)}},{key:"updateChart",value:function(e,t){var n=e.data;if(this.chart){this.chart.yAxis.axisLabel(e.yLabel);var r=this.props.chartModes||["Stacked","Expanded"];this.chart.controlOptions(r)}null!=this.chartSelection?(this.chartSelection.datum(n).transition().duration(this.animateDuration).call(this.chart),nv.utils.windowResize(this.chart.update)):console.log("Chart "+this.name+" has not been initialized")}}]),t}();t.default=a},338:function(t,n){t.exports=e}})});