webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var btnOpen = document.querySelector('.sidenav__btn');
		var btnClose = document.querySelector('.sidenav__close');
		var overlay = document.querySelector('.sidenav__overlay');
		var body = document.querySelector('body');
		var wrap = document.querySelector('.sidenav__body');
		var activeClass = 'page_open-side';
	
		var open = function open() {
			body.classList.add(activeClass);
		};
	
		var close = function close() {
			body.classList.remove(activeClass);
		};
	
		btnOpen.addEventListener('click', open);
		overlay.addEventListener('click', close);
		btnClose.addEventListener('click', close);
	};

/***/ }

})
//# sourceMappingURL=0.8217a40543ba7639975e.hot-update.js.map