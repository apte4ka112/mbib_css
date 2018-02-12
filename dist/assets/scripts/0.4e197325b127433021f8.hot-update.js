webpackHotUpdate(0,{

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var inputs = document.querySelectorAll('.input_digit-pretify');
	
		var mask = function mask(value) {
			var output = [];
	
			for (var i = 0; i < value.length; i++) {
				if (i !== 0 && i % 4 === 0) {
					output.push(' ');
				}
				output.push(value[i]);
			}
	
			return output.join[''];
		};
	
		var unmask = function unmask(value) {
			var output = value.replace(new RegExp(/[^\d]/, 'g'), '');
			return output;
		};
	
		keydownHandler = function keydownHandler(e) {
			oldValue = e.target.value;
		}, inputHandler = function inputHandler(e) {
			var el = e.target,
			    newValue = el.value;
	
			newValue = unmask(newValue);
	
			if (newValue.match(regex)) {
				newValue = mask(newValue);
				el.value = newValue;
			} else {
				el.value = oldValue;
			}
		};
	};

/***/ }

})
//# sourceMappingURL=0.4e197325b127433021f8.hot-update.js.map