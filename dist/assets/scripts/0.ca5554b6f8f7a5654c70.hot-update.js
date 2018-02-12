webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tab = function ($) {
		// global $
		// a temp value to cache *what* we're about to show
		var target = null;
	
		function update() {
			if (target) {
				target.attr('id', target.data('old-id'));
				target = null;
			}
	
			var hash = window.location.hash;
			if (targets.indexOf(hash) !== -1) {
				return show(hash);
			}
	
			// NOTE: this was added after the article was written
			// to fix going "back" on the browser nav to an empty state
			if (!hash) {
				show();
			}
		}
	
		function show(id) {
			// if no value was given, let's take the first panel
			if (!id) {}
			// id = targets[0];
	
			// remove the selected class from the tabs,
			// and add it back to the one the user selected
			tabs.removeClass('tab__head-item_active').attr('aria-selected', 'false').filter(function () {
				return this.hash === id;
			}).addClass('tab__head-item_active').attr('aria-selected', 'true');
	
			// now hide all the panels, then filter to
			// the one we're interested in, and show it
			panels.removeClass('tab__content_active').attr('aria-hidden', 'true').filter(id).addClass('tab__content_active').attr('aria-hidden', 'false');
		}
	
		// collect all the tabs
		var tabs = $('.tab .tab__head-item').on('click', function () {
			target = $(this.hash).removeAttr('id');
			if (location.hash === this.hash) {
				setTimeout(update);
			}
		}).attr('tabindex', '0');
	
		// get an array of the panel ids (from the anchor hash)
		var targets = tabs.map(function () {
			return this.hash;
		}).get();
	
		// use those ids to get a jQuery collection of panels
		var panels = $(targets.join(',')).each(function () {
			// keep a copy of what the original el.id was
			$(this).data('old-id', this.id);
		});
	
		var btnClose = $('.tab__close');
	
		btnClose.on('click', function () {
			// console.log('this');
			// window.history.back();
			// update();
			var offset = $(this).closest('.tab').offset();
			window.location.hash = '';
			show('');
			$(window).scrollTop(offset.top);
		});
	
		window.addEventListener('hashchange', update);
	
		// initialise
		if (targets.indexOf(window.location.hash) !== -1) {
			update();
		} else {
			show();
		}
	}(_jquery2.default);
	
	exports.default = tab;

/***/ }

})
//# sourceMappingURL=0.ca5554b6f8f7a5654c70.hot-update.js.map