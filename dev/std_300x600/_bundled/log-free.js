(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power4.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('./common.js');

function start() {

	var time = .525;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from("#player", .5, { x: 300 });

	tl.from("#t1a", time, { x: -300 }, '-=.15');
	tl.from("#t1b", time, { x: -300 }, "-=" + time * .3);
	tl.from("#t1c", time, { x: -300 }, "-=" + time * .3);
	tl.from("#t1d", time, { x: -300 }, "-=" + time * .3);

	var t1Out = { x: "+=100", skewY: 10, skewX: 10, scale: 1, opacity: 0 };
	tl.add("t1Out", "+=2.5");
	tl.to("#t1a", time, _extends({}, t1Out), "t1Out");
	tl.to("#t1b", time * 1.1, _extends({}, t1Out), "t1Out");
	tl.to("#t1c", time * 1.2, _extends({}, t1Out), "t1Out");
	tl.to("#t1d", time * 1.3, _extends({}, t1Out), "t1Out");
	tl.to("#prolineSmall", .3, { opacity: 0 }, "t1Out");

	// return
	var scale = { scale: 2, opacity: 0, ease: Back.easeIn };

	tl.set(".frame2", { opacity: 1 });
	tl.add("t2In");
	tl.from("#t2a", .3, scale, "t2In");
	tl.from("#t2b", .35, scale, "t2In");
	tl.from("#t2c", .45, scale, "t2In");

	var shakeAmount = 7;
	tl.add("shake", "-=.05");
	tl.to("#player", .05, { x: "+=" + shakeAmount, y: "+=" + shakeAmount / 2 }, "shake");
	tl.to("#player", .05, { x: "-=" + shakeAmount, y: "-=" + shakeAmount / 2 });
	tl.to("#player", .05, { x: "+=" + shakeAmount, y: "+=" + shakeAmount / 2 });
	tl.to("#player", .05, { x: "-=" + shakeAmount, y: "-=" + shakeAmount / 2 });

	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})

	tl.from("#proline", .35, { opacity: 0 }, "+=.1");

	tl.from("#footer", .35, { opacity: 0 }, "+=.3");

	// tl.to(".frame1", .5, {opacity:0}, "t2In")

	// tl.gotoAndPlay("t2In")
}

module.exports = start;

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsVerticalJs = require('../../_common/js/vertical.js');

var _commonJsVerticalJs2 = _interopRequireDefault(_commonJsVerticalJs);

(0, _commonJsVerticalJs2['default'])();

},{"../../_common/js/vertical.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
