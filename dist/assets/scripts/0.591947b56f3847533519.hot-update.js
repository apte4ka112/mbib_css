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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				dropdownParent: (0, _jquery2.default)('#modal .modal__body'),
				closeOnSelect: false
			});
	
			(0, _jquery2.default)('.select').on('select2:open', function (e) {
				var modal = (0, _jquery2.default)('.modal_mobile-select');
				var dropdown = modal.find('.select2-dropdown');
				console.log(modal.find('li').length);
				modal.find('.select2-container').css({
					position: 'relative',
					top: 0,
					left: 0
				});
	
				dropdown.css({
					position: 'relative',
					top: 0,
					left: 0
				});
	
				_jquery2.default.magnificPopup.open({
					items: {
						src: modal, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					},
					callbacks: {
						open: function open() {
							/*modal.find('.select2-container').css({
	      	position : 'relative',
	      	top : 0,
	      	left : 0
	      });*/
						},
						markupParse: function markupParse(template, values, item) {
							/*modal.find('.select2-container').css({
	      	position : 'relative',
	      	top : 0,
	      	left : 0
	      });*/
						}
					}
				});
			});
		}
	};

/***/ })

})
//# sourceMappingURL=0.591947b56f3847533519.hot-update.js.map