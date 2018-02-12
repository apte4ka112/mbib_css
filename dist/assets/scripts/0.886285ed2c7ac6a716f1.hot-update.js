webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	var _isMobile = __webpack_require__(21);
	
	var _isMobile2 = _interopRequireDefault(_isMobile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				dropdownParent: (0, _jquery2.default)('#modal .modal__body')
			});
	
			(0, _jquery2.default)('.select').on('select2:open', function (e) {
				var modal = (0, _jquery2.default)('.modal_mobile-select');
				var modalTitle = modal.find('.modal__title');
				var dropdown = modal.find('.select2-dropdown');
				var placeholder = (0, _jquery2.default)(this).attr('data-placeholder');
	
				modal.find('.select2-container').css({
					position: 'relative',
					top: 0,
					left: 0
				});
	
				dropdown.css({
					position: 'relative',
					top: 0,
					left: 0,
					width: '100%'
				});
	
				modalTitle.text(placeholder);
	
				_jquery2.default.magnificPopup.open({
					items: {
						src: modal, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
	
			(0, _jquery2.default)('.select').on('select2:close', function (e) {
				_jquery2.default.magnificPopup.close({
					items: {
						src: modal, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
		}
	};

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var appVersion = navigator.appVersion;
		var isAndroid = /android/gi.test(appVersion);
		var isIOS = /iphone|ipad|ipod/gi.test(appVersion);
		var probablyMobile = isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
		return probablyMobile;
	};

/***/ })

})
//# sourceMappingURL=0.886285ed2c7ac6a716f1.hot-update.js.map