webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(21);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*$.fn.select2.amd.define("CustomDropdownAdapter", [
	    "select2/utils",
	    "select2/dropdown",
	    "select2/dropdown/attachBody",
	    "select2/dropdown/attachContainer"
	  ],
	  function(Utils, Dropdown, AttachBody, AttachContainer) {
	
	    // Decorate Dropdown with Search functionalities
	    let adapter = Utils.Decorate(Utils.Decorate(Dropdown, AttachContainer), AttachContainer);
	
	    adapter.prototype.render = function() {
	    	var $rendered = Dropdown.prototype.render.call(this);
	    	// $rendered.css('position', 'relative');
	    	console.log($rendered);
	    	return $rendered;
	    }
	    adapter = Utils.Decorate(adapter, AttachBody);
	    return adapter;
	  });*/
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				// dropdownAdapter: $.fn.select2.amd.require("ModalDropdown")
				dropdownParent: (0, _jquery2.default)('#modal .modal__body'),
				closeOnSelect: false
				// Make selection-box similar to single select
				// selectionAdapter: $.fn.select2.amd.require("CustomSelectionAdapter"),
				// dropdownAdapter: $.fn.select2.amd.require("CustomDropdownAdapter")
			});
	
			(0, _jquery2.default)('.select').on('select2:opening', function (e) {
				var modal = (0, _jquery2.default)('.modal_mobile-select');
				console.log(modal.find('.select2-container').length);
	
				_jquery2.default.magnificPopup.open({
					items: {
						src: (0, _jquery2.default)('.modal_mobile-select'), // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
			});
		}
	};

/***/ })

})
//# sourceMappingURL=0.3b2972169d7adad1373c.hot-update.js.map