webpackHotUpdate(0,{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _hyperform = __webpack_require__(17);
	
	var _hyperform2 = _interopRequireDefault(_hyperform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = function () {
		var authForm = document.querySelector('.form[name=auth]');
		var registrForm = document.querySelector('.form[name=registr]');
		if (authForm) {
			var validatorClasses = {
				classes: {
					warning: 'form__warning',
					valid: 'input_valid',
					invalid: 'input_invalid',
					validated: 'input_validated'
				}
			};
			var $formAuth = (0, _hyperform2.default)(authForm, validatorClasses);
		}
	}();
	
	exports.default = form;

/***/ }

})
//# sourceMappingURL=0.4fa0750f2dcc107f3748.hot-update.js.map