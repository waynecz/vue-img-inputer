(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueImgInputer"] = factory();
	else
		root["VueImgInputer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _imgInputer = __webpack_require__(3);

	var _imgInputer2 = _interopRequireDefault(_imgInputer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _imgInputer2.default;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(4)

	var Component = __webpack_require__(13)(
	  /* script */
	  __webpack_require__(14),
	  /* template */
	  __webpack_require__(15),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/evox/repos/vue-img-inputer/src/component/imgInputer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] imgInputer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1bf252b0", Component.options)
	  } else {
	    hotAPI.reload("data-v-1bf252b0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(11)("8510b9a4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1bf252b0!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./imgInputer.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1bf252b0!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./imgInputer.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n@font-face {\n  font-family: \"iconfont\";\n  src: url(" + __webpack_require__(7) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(7) + "#iefix) format('embedded-opentype'),  url(" + __webpack_require__(8) + ") format('woff'),  url(" + __webpack_require__(9) + ") format('truetype'),  url(" + __webpack_require__(10) + "#iconfont) format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-accessory:before {\n  content: \"\\E62D\";\n}\n.icon-tupian2:before {\n  content: \"\\E62F\";\n}\n.icon-shangchuan:before {\n  content: \"\\E6A5\";\n}\n.icon-tupian:before {\n  content: \"\\E624\";\n}\n.img-inputer {\n  position: relative;\n  display: inline-block;\n  width: 260px;\n  height: 150px;\n  border-radius: 5px;\n  background: #f0f0f0;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.img-inputer--small {\n  width: 160px;\n  height: 100px;\n}\n.img-inputer--small .img-inputer__placeholder {\n  font-size: 12px;\n  top: 65%;\n}\n.img-inputer--small .img-inputer__icon {\n  font-size: 28px !important;\n  top: 38%;\n}\n.img-inputer--large {\n  width: 460px;\n  height: 250px;\n}\n.img-inputer:hover {\n  -webkit-transform: scale(1.015);\n          transform: scale(1.015);\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n.img-inputer.nhe:hover {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n}\n.img-inputer--light {\n  background: #fbfdff;\n  border: 1px solid #97a8be;\n  box-shadow: none;\n}\n.img-inputer--light .img-inputer__icon {\n  color: #97a8be;\n}\n.img-inputer--light:hover {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: none;\n  border-color: #20a0ff;\n}\n.img-inputer__icon {\n  position: absolute;\n  font-size: 34px !important;\n  left: 50%;\n  top: 40%;\n  color: #757575;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.img-inputer__placeholder {\n  position: absolute;\n  margin: 0;\n  font-size: 14px;\n  width: 100%;\n  color: #aaa;\n  top: 62%;\n  text-align: center;\n}\n.img-inputer__preview-box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 5px;\n  overflow: hidden;\n  background: #333;\n}\n.img-inputer__preview-img {\n  position: relative;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.img-inputer__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.img-inputer__label:hover ~ .img-inputer__mask {\n  display: block;\n}\n.img-inputer__inputer {\n  position: absolute;\n  left: -9999px;\n}\n.img-inputer__mask {\n  display: none;\n  position: absolute;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 5px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.22);\n}\n.img-inputer__file-name {\n  color: white;\n  font-size: 13px;\n  padding-top: 10px;\n  margin: 0;\n  display: inline-block;\n  max-width: 90%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.img-inputer__change {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-size: 12px;\n  border-radius: 0 0 5px 5px;\n  background: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  color: white;\n  width: 100%;\n  padding: 9px 0;\n}\n.img-inputer__err {\n  color: #e55;\n  font-size: 12px;\n  position: absolute;\n  bottom: -28px;\n  width: 100%;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: trnsform;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n  -webkit-transform: translateX(30%);\n          transform: translateX(30%);\n}\n", ""]);

	// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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IDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA=="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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OLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTIwNzMxIGF0IFR1ZSBGZWIgMjEgMTI6MTg6NTEgMjAxNwogQnkgYWRtaW4KPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJpY29uZm9udCIgaG9yaXotYWR2LXg9IjEwMjQiID4KICA8Zm9udC1mYWNlIAogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgcGFub3NlLTE9IjIgMCA2IDMgMCAwIDAgMCAwIDAiCiAgICBhc2NlbnQ9Ijg5NiIKICAgIGRlc2NlbnQ9Ii0xMjgiCiAgICB4LWhlaWdodD0iNzkyIgogICAgYmJveD0iMCAtMjI0IDEwMjQgODAwIgogICAgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMCIKICAgIHVuZGVybGluZS1wb3NpdGlvbj0iMCIKICAgIHVuaWNvZGUtcmFuZ2U9IlUrMDA3OC1FNkE1IgogIC8+CjxtaXNzaW5nLWdseXBoIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSIubm90ZGVmIiAKIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iLm5vdGRlZiIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5udWxsIiBob3Jpei1hZHYteD0iMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im5vbm1hcmtpbmdyZXR1cm4iIGhvcml6LWFkdi14PSIzNDEiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ4IiB1bmljb2RlPSJ4IiBob3Jpei1hZHYteD0iMTAwMSIgCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWNjZXNzb3J5IiB1bmljb2RlPSImI3hlNjJkOyIgCmQ9Ik02OTggNDczbC02NSA2NWwtMzI1IC0zMjVxLTQwIC00MCAtNDAgLTk3dDQwIC05Ny41dDk3LjUgLTQwLjV0OTcuNSA0MGwzOTAgMzkwcTY3IDY3IDY3IDE2MnQtNjcuNSAxNjIuNXQtMTYyLjUgNjcuNXQtMTYyIC02N2wtNDA5IC00MDlxMCAtMSAtMC41IC0xaC0wLjVxLTk0IC05NCAtOTQgLTIyNi41dDk0IC0yMjYuNXQyMjYuNSAtOTR0MjI2LjUgOTR2MC41dDEgMC41djBsMjc5IDI3OWwtNjUgNjVsLTI3OSAtMjc5cTAgLTEgLTAuNSAtMQpoLTAuNXEtNjcgLTY3IC0xNjEuNSAtNjd0LTE2MS41IDY3dC02NyAxNjEuNXQ2NyAxNjEuNWwxIDF2MGw0MDkgNDA5cTQwIDQwIDk3IDQwdDk3LjUgLTQwLjV0NDAuNSAtOTcuNXQtNDAgLTk3bC0zOTAgLTM5MHEtMTMgLTEzIC0zMi41IC0xM3QtMzIuNSAxMy41dC0xMyAzMi41dDEzIDMyeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0dXBpYW4yIiB1bmljb2RlPSImI3hlNjJmOyIgaG9yaXotYWR2LXg9IjEwMjUiIApkPSJNOTI4IDcxNmgtODMycS00MCAwIC02OCAtMjh0LTI4IC02OHYtNjQwcTAgLTQwIDI4IC02OHQ2OCAtMjhoODMycTQwIDAgNjggMjh0MjggNjh2NjQwcTAgNDAgLTI4IDY4dC02OCAyOHpNOTQ0IDc4bC0yMDEgMjY4cS0xIDIgLTQgNS41dC0xNi41IDkuNXQtMzIuNSA2cS0yMCAwIC0zNSAtNXQtMjAgLTEwbC01IC02bC0xNzYgLTI3MXEtMTAgLTE4IC0zMyAtMThxLTExIDAgLTIwIDQuNXQtMTMgOC41bC0zIDVsLTkzIDEwNnEtMiAzIC03IDguNQp0LTE5LjUgMTR0LTI3LjUgOC41cS05IDAgLTE4IC0zLjV0LTE1LjUgLTguNXQtMTIgLTEwLjVsLTguNSAtOC41bC0yIC00bC0xMDIgLTEyNnY1NTJxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg4MDBxMTMgMCAyMi41IC05LjV0OS41IC0yMi41di01MjV2MHpNNDY0IDQyOHEwIC00NyAtMzMgLTgwdC04MCAtMzN0LTgwLjUgMzN0LTMzLjUgODB0MzMuNSA4MHQ4MC41IDMzdDgwIC0zM3QzMyAtODB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNoYW5nY2h1YW4iIHVuaWNvZGU9IiYjeGU2YTU7IiAKZD0iTTM5MiA0NDlxLTIgMiAtNiA1LjV0LTE3LjUgMTAuNXQtMjcuNSAxMHQtMzUgMHQtNDIgLTE2cS0yOSAtMTkgLTQyLjUgLTQ5dC0xMi41IC01MWwxIC0yMXEtNiAtMSAtMTUuNSAtNHQtMzUgLTE2LjV0LTQ0LjUgLTMyLjV0LTM1IC01NC41dC0xNiAtNzkuNXExIC0zMiAxMC41IC01OHQyMi41IC00MnQzMSAtMjh0MzMgLTE3LjV0MzEgLTguNXQyMiAtMy41dDkgLTAuNXYwaDIzM3YxNjdoLTExMmwxNjggMTY4bDE2OCAtMTY4aC0xMTJ2LTE2NwpoMjI2cTMgMCA4LjUgMC41dDIxIDN0MjkuNSA4dDMyLjUgMTYuNXQzMi41IDI2dDI1LjUgMzkuNXQxNS41IDU1LjVxOCAxMjMgLTk2IDE3OHEtMjQgMTMgLTQzIDE3cS0yIDEgMCAxMy41dC0yIDM1dC04LjUgNDguNXQtMTkgNTQuNXQtMzQgNTJ0LTUzIDQxLjV0LTc2LjUgMjRxLTUxIDUgLTk0IC0xMHQtNjcgLTM2LjV0LTQzIC01MC41dC0yNCAtNDF0LTcgLTE5djB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InR1cGlhbiIgdW5pY29kZT0iJiN4ZTYyNDsiIApkPSJNNzY2IDc1aC01MDh2MTAybDE1MiAyNTRsMjA5IC0yNTRsMTQ3IDEwMXYtMjAzek03NjYgNDA1LjVxMCAtMzEuNSAtMjIgLTU0dC01NCAtMjIuNXQtNTQgMjIuNXQtMjIgNTR0MjIgNTR0NTQgMjIuNXQ1NCAtMjIuNXQyMiAtNTR6TTgzNCA2MDVxLTI3IDM4IC02OSA3OXEtNDIgNDIgLTc5IDY5cS00NiAzNCAtNzIgMzRoLTM5NHEtMjcgMCAtNDUuNSAtMTguNXQtMTguNSAtNDUuNXYtNjg2cTAgLTI3IDE4LjUgLTQ1LjV0NDUuNSAtMTguNQpoNTg0cTI3IDAgNDUuNSAxOC41dDE4LjUgNDUuNXY0OTZxMCAyNiAtMzQgNzJ6TTcyOSA2NDhxMzQgLTM0IDU4IC02NWgtMTIzdjEyM3EzMiAtMjQgNjUgLTU4djB6TTgxNyAzN3EwIC01IC0zLjUgLTl0LTkuNSAtNGgtNTg0cS02IDAgLTkuNSA0dC0zLjUgOXY2ODZxMCA1IDMuNSA5dDkuNSA0aDM5NHYtMTc4cTAgLTEwIDcuNSAtMTcuNXQxNy41IC03LjVoMTc4di00OTZ2MHoiIC8+CiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(12)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      default: 'img',
	      type: String
	    },
	    // 默认情况下可能会导致选择框弹出慢的问题，请针对具体化图片类型即可解决
	    accept: {
	      default: 'image/*,video/*;',
	      type: String
	    },
	    id: {
	      default: '',
	      type: String
	    },
	    onChange: {
	      default: null,
	      type: Function
	    },
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    readonlyTipText: {
	      default: '不可更改',
	      type: String
	    },
	    bottomText: {
	      default: '点击或拖拽图片以修改',
	      type: String
	    },
	    placeholder: {
	      default: '点击或拖拽选择图片',
	      type: String
	    },
	    value: {
	      default: undefined
	    },
	    icon: {
	      default: '',
	      type: String
	    },
	    customerIcon: {
	      default: '',
	      type: String
	    },
	    maxSize: {
	      default: 5120,
	      type: Number
	    },
	    size: {
	      default: '',
	      type: String
	    },
	    imgSrc: {
	      default: '',
	      type: String
	    },
	    nhe: {
	      type: Boolean,
	      default: false
	    },
	    noMask: {
	      type: Boolean,
	      default: false
	    },
	    theme: {
	      type: String,
	      default: ''
	    },
	    name: {
	      type: String,
	      default: 'file'
	    }

	  },
	  data: function data() {
	    return {
	      inputId: '',
	      file: [],
	      dataUrl: '',
	      fileName: '',
	      errText: ''
	    };
	  },

	  computed: {
	    imgSelected: function imgSelected() {
	      return !!this.dataUrl || !!this.fileName;
	    },
	    sizeHumanRead: function sizeHumanRead() {
	      var rst = 0;
	      if (this.maxSize < 1024) {
	        rst = this.maxSize + 'K';
	      } else {
	        rst = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
	      }
	      return rst;
	    },
	    sizeClass: function sizeClass() {
	      if (this.size) {
	        return 'img-inputer--' + this.size;
	      }
	    },
	    themeClass: function themeClass() {
	      return 'img-inputer--' + this.theme;
	    },
	    ICON: function ICON() {
	      var rst = '';
	      if (this.icon) {
	        rst = this.icon;
	      } else {
	        rst = this.theme == 'light' ? 'img' : 'clip';
	      }
	      return rst;
	    },
	    iconUnicode: function iconUnicode() {
	      var iconMap = {
	        img: '&#xe624;',
	        clip: '&#xe62d;',
	        img2: '&#xe62f;'
	      };
	      return this.customerIcon || iconMap[this.ICON];
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.inputId = this.id || this.gengerateID();
	    if (this.imgSrc) {
	      this.dataUrl = this.imgSrc;
	    }
	    // 阻止浏览器默认的拖拽时事件
	    ['dragleave', 'drop', 'dragenter', 'dragover'].forEach(function (e) {
	      _this.preventDefaultEvent(e);
	    });
	    // 绑定拖拽时间
	    this.addDropSupport();
	  },

	  methods: {
	    preventDefaultEvent: function preventDefaultEvent(eventName) {
	      document.addEventListener(eventName, function (e) {
	        e.preventDefault();
	      }, false);
	    },
	    addDropSupport: function addDropSupport() {
	      var _this2 = this;

	      var BOX = this.$refs.box;
	      BOX.addEventListener('drop', function (e) {
	        e.preventDefault();
	        if (_this2.readonly) return false;
	        _this2.errText = '';
	        var fileList = e.dataTransfer.files;

	        if (fileList.length === 0) {
	          return false;
	        }
	        /**
	         * TODO
	         * 未来打算支持各种文件类型
	         * Intend to support any fileType
	         */
	        if (fileList[0].type.indexOf('image') === -1) {
	          _this2.errText = '请选择图片文件';
	          return false;
	        }
	        /**
	         * TODO
	         * 未来打算支持多文件
	         * Intend to support muti-file
	         */
	        if (fileList.length > 1) {
	          _this2.errText = '暂不支持多文件';
	          return false;
	        }
	        _this2.handleFileChange(null, fileList[0]);
	      });
	    },
	    gengerateID: function gengerateID() {
	      var nonstr = Math.random().toString(36).substring(3, 8);
	      if (!document.getElementById(nonstr)) {
	        return nonstr;
	      } else {
	        return this.gengerateID();
	      }
	    },
	    handleFileChange: function handleFileChange(e, FILE) {
	      var inputDOM = this.$refs.inputer;
	      this.file = FILE || inputDOM.files[0];
	      this.errText = '';

	      var size = Math.floor(this.file.size / 1024);
	      if (size > this.maxSize) {
	        this.errText = '\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7' + this.sizeHumanRead;
	        return false;
	      }

	      // 双向绑定
	      this.$emit('input', this.file);

	      // 文件选择回调
	      this.onChange && this.onChange(this.file, inputDOM.value);
	      this.$emit('onChange', this.file);

	      this.imgPreview(this.file);

	      this.fileName = this.file.name;

	      this.resetInput();
	    },
	    imgPreview: function imgPreview(file) {
	      var self = this;

	      if (!file || !window.FileReader) return;

	      if (/^image/.test(file.type)) {
	        var reader = new FileReader();
	        reader.readAsDataURL(file);

	        reader.onloadend = function () {
	          self.dataUrl = this.result;
	        };
	      }
	    },
	    resetInput: function resetInput() {
	      var input = document.getElementById(this.inputId);
	      var form = document.createElement('form');

	      document.body.appendChild(form);

	      var parentNode = input.parentNode;
	      // 判断input 是否为最后一个节点
	      var isLastNode = parentNode.lastChild === input;
	      var nextSibling = void 0;
	      // 如果后面还有节点，则记录下一个node，做位置标志
	      // 如果本身已经是最后一个节点，则直接通过parentNode appendChild即可
	      if (!isLastNode) {
	        nextSibling = input.nextSibling;
	      }

	      form.appendChild(input);
	      form.reset();

	      isLastNode ? parentNode.appendChild(input) : parentNode.insertBefore(input, nextSibling);

	      document.body.removeChild(form);
	    }
	  },
	  watch: {
	    imgSrc: function imgSrc(newval, oldval) {
	      if (newval) {
	        this.dataUrl = newval;
	      }
	    },
	    value: function value(newval, oldval) {
	      // 重置逻辑
	      if (oldval && !newval) {
	        this.file = [];
	        this.dataUrl = '';
	        this.errText = '';
	        this.fileName = '';
	      }
	    }
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "box",
	    staticClass: "img-inputer",
	    class: [_vm.themeClass, _vm.sizeClass, _vm.nhe ? 'nhe' : '' ]
	  }, [_c('i', {
	    staticClass: "iconfont img-inputer__icon",
	    domProps: {
	      "innerHTML": _vm._s(_vm.iconUnicode)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "img-inputer__placeholder"
	  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), (_vm.imgSelected) ? _c('div', {
	    staticClass: "img-inputer__preview-box"
	  }, [_c('img', {
	    staticClass: "img-inputer__preview-img",
	    attrs: {
	      "src": _vm.dataUrl
	    }
	  })]) : _vm._e(), _vm._v(" "), _c('label', {
	    staticClass: "img-inputer__label",
	    attrs: {
	      "for": _vm.readonly ? '' : _vm.inputId
	    }
	  }), _vm._v(" "), (_vm.imgSelected && !_vm.noMask) ? _c('div', {
	    staticClass: "img-inputer__mask"
	  }, [_c('p', {
	    staticClass: "img-inputer__file-name"
	  }, [_vm._v(_vm._s(_vm.fileName))]), _vm._v(" "), (_vm.readonly) ? _c('p', {
	    staticClass: "img-inputer__change"
	  }, [_vm._v(_vm._s(_vm.readonlyTipText))]) : _c('p', {
	    staticClass: "img-inputer__change"
	  }, [_vm._v(_vm._s(_vm.bottomText))])]) : _vm._e(), _vm._v(" "), _c('input', {
	    ref: "inputer",
	    staticClass: "img-inputer__inputer",
	    attrs: {
	      "type": "file",
	      "name": _vm.name,
	      "id": _vm.inputId,
	      "accept": _vm.accept,
	      "capture": "video"
	    },
	    on: {
	      "change": _vm.handleFileChange
	    }
	  }), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [(_vm.errText.length) ? _c('div', {
	    staticClass: "img-inputer__err"
	  }, [_vm._v(_vm._s(_vm.errText))]) : _vm._e()])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1bf252b0", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;