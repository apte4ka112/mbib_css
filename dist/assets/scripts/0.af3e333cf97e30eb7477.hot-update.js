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
	
	/*$.fn.select2.amd.define("ModalDropdown",
		[
			"select2/utils",
			"select2/dropdown",
			"select2/dropdown/attachBody",
			// "select2/dropdown/attachContainer",
			"select2/dropdown/search",
		],
		function (Utils, Dropdown, AttachBody, AttachContainer, Search) {
			// Here goes the code of this custom adapter
			let dropdownWithSearch = Utils.Decorate(Dropdown, Search);
	
			dropdownWithSearch.prototype.render = function() {
				// Copy and modify default search render method
				var $rendered = Dropdown.prototype.render.call(this);
				
				// Add ability for a placeholder in the search box
				let placeholder = this.options.get("placeholderForSearch") || "";
				var $search = $(
					'<span class="select2-search select2-search--dropdown" style="background-color: red;">' +
					'<input class="select2-search__field" placeholder="' + placeholder + '" type="search"' +
					' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
					' spellcheck="false" role="textbox" />' +
					'</span>'
				);
	
				this.$searchContainer = $search;
				this.$search = $search.find('input');
	
				$rendered.prepend($search);
				return $rendered;
			};
	
			let adapter = Utils.Decorate(dropdownWithSearch, AttachContainer);
			adapter = Utils.Decorate(adapter, AttachBody);
			
			let dropdownWithSearch = Utils.Decorate(Dropdown, Search);
			let adapter =  Utils.Decorate(dropdownWithSearch, AttachBody);
	
			adapter.position = function ($rendered, $defaultContainer) { 
				console.log('asd');
			};
	
			return adapter;
		}
	);*/
	
	exports.default = {
		init: function init() {
			(0, _jquery2.default)('.select').select2({
				width: "resolve",
				// dropdownAdapter: $.fn.select2.amd.require("ModalDropdown")
				dropdownParent: (0, _jquery2.default)('#modal .modal__body')
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

/***/ })

})
//# sourceMappingURL=0.af3e333cf97e30eb7477.hot-update.js.map