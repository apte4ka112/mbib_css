webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				dropdownParent: (0, _jquery2.default)('#modal .modal__body'),
				dropdownCssClass: "_modal"
			});
	
			(0, _jquery2.default)('.select').on('select2:opening', function (e) {
				console.log('asfs');
				_jquery2.default.magnificPopup.open({
					items: {
						src: '#modal', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
		}
	};

/***/ }

})
//# sourceMappingURL=0.98359e1ee661072a3d34.hot-update.js.map