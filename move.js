var move = (function(window, undefined) {
    "use strict";

    /*
     * Tween.js
     * t: current time（当前时间）；
     * b: beginning value（初始值）；
     * c: change in value（变化量）；
     * d: duration（持续时间）。
     * you can visit 'http://easings.net/zh-cn' to get effect
     */
    var TWEEN = {
        linear: function(t, b, c, d) {
            return c * t / d + b;
        },
        easeInQuad: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
        },
        easeInCubic: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function(t, b, c, d, a, p) {
            var s = void 0;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function(t, b, c, d, a, p) {
            var s = void 0;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function(t, b, c, d, a, p) {
            var s = void 0;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function(t, b, c, d) {
            return c - TWEEN.easeOutBounce(d - t, 0, c, d) + b;
        },
        easeOutBounce: function(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
                return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
                return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
            } else if (t < 2.5 / 2.75) {
                return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
        },
        easeInOutBounce: function(t, b, c, d) {
            if (t < d / 2) {
                return TWEEN.easeInBounce(t * 2, 0, c, d) * .5 + b;
            } else {
                return TWEEN.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    };

    Math.TWEEN = TWEEN;

    // requestAnimationFrame 兼容性处理
    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    })();

    // 获取元素的某个样式或者整个 style 对象
    // TODO: 兼容性测试？
    // 一个坑点：transfrom 获取到的是一个 matrix
    function getStyle(element, prop) {
        if (prop === 'transform') {
            return element.style[prop];
        }
        if (prop) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                return document.defaultView.getComputedStyle(element, null)[prop];
            } else if (element.currentStyle) {
                return element.currentStyle[prop];
            }
            return element.style[prop];
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(element, null);
        } else if (element.currentStyle) {
            return element.currentStyle;
        }
        return element.style;
    }

    // 无需补全单位的样式属性
    var transform = {
        all: ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'],
        px: ['translateX', 'translateY', 'translateZ', 'perspective'],
        deg: ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'],
        none: ['scale', 'scaleX', 'scaleY', 'scaleZ']
    };
    var noSuffix = ['opacity', 'backgroundSize'].concat(transform.none);

    /**
     * changeStyle 函数用于改变 ele 元素的样式
     * @param ele
     * @param step
     *      width
     *      height
     *      opacity
     *      left, right, top, bottom
     *      margin, marginTop, marginBottom, marginLeft, marginRight
     *      padding, paddingTop, paddingBottom, paddingLeft, paddingRight
     *      borderWidth, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth
     *      backgroundSize(暂时只支持数值表示法，如：1 => 100%)
     */
    function changeStyle(ele, step) {
        var transformStyle = '';
        for (var prop in step) {
            if (noSuffix.indexOf(prop) + 1) {
                if (prop === 'backgroundSize') {
                    ele.style[prop] = step[prop] + '%';
                } else if (prop.indexOf('scale') + 1) {
                    transformStyle = (' ' + prop + '(' + step[prop] + ')');

                    // 由于 transform 的属性值可能是多个变形函数，这里就牵涉到一个复写的问题了
                    var exp = new RegExp(prop + '\\([\\w\\W]+?\\)', 'g');
                    ele.style.transform = ele.style.transform.replace(exp, '') + transformStyle;
                } else {
                    ele.style[prop] = step[prop];
                }
            } else if (transform.deg.indexOf(prop) + 1) {
                transformStyle = (' ' + prop + '(' + step[prop] + 'deg)');

                // 由于 transform 的属性值可能是多个变形函数，这里就牵涉到一个复写的问题了
                var exp = new RegExp(prop + '\\([\\w\\W]+?\\)', 'g');
                ele.style.transform = ele.style.transform.replace(exp, '') + transformStyle;
            } else if (transform.px.indexOf(prop) + 1) {
                transformStyle = (' ' + prop + '(' + step[prop] + 'px)');

                // 由于 transform 的属性值可能是多个变形函数，这里就牵涉到一个复写的问题了
                var exp = new RegExp(prop + '\\([\\w\\W]+?\\)', 'g');
                ele.style.transform = ele.style.transform.replace(exp, '') + transformStyle;
            } else {
                ele.style[prop] = step[prop] + 'px';
            }
        }
    }

    // 运动框架主功能函数、
    function move(ele, props) {
        var start = 0;
        var during = Math.ceil(400 / 16.67);
        var original = {};

        var fx = Math.TWEEN.linear;
        var compvare = null;

        for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            rest[_key2 - 2] = arguments[_key2];
        }

        for (var index in rest) {
            if (typeof rest[index] === 'number') {
                during = Math.ceil(rest[index] / 16.67);
            }
            if (typeof rest[index] === 'string' && rest[index] in Math.TWEEN) {
                fx = Math.TWEEN[rest[index]];
            }
            if (typeof rest[index] === 'function') {
                compvare = rest[index];
            }
        }

        var processedProps = (function () {
            var processedProps = {};
            for (var prop in props) {
                if (typeof props[prop] === 'number' || /[-]?(\d+|\d*\.\d*)/.test(props[prop])) {
                    // 统一去掉单位
                    processedProps[prop] = parseFloat(props[prop]);
                    
                    // prop 不属于 CSS3 transform 函数时正常处理
                    if (!(transform.all.indexOf(prop) + 1)) {
                        original[prop] = parseFloat(getStyle(ele, prop));
                    } 
                }
                // backgroundSize 可能是百分数
                if (prop === 'backgroundSize') {
                    var backgroundSize = getStyle(ele, prop);
                    // backgroundSize 的原始值可能是 auto
                    if (backgroundSize === 'auto') {
                        original[prop] = 100;
                    } else {
                        original[prop] = parseFloat(backgroundSize.replace('%', ''));
                    }
                    processedProps[prop] = props[prop].toString().indexOf('%') + 1 ? parseFloat(props[prop].replace('%', '')) : parseFloat(props[prop]) * 100;
                }
                // 针对 CSS3 transform 各个转换函数做特殊处理
                if (transform.all.indexOf(prop) + 1) {
                    var transformStyle = getStyle(ele, 'transform').replace(/\)/g, '').split(/\(|\s+/);
                    var index = transformStyle.indexOf(prop);
                    original[prop] = parseFloat(transformStyle[index + 1]) || (prop.indexOf('scale') + 1 ? 1 : 0);
                }
            } 

            return processedProps;
        })();

        function main() {
            start++;
            var step = {};
            for (var _prop in processedProps) {
                step[_prop] = fx(start, original[_prop], processedProps[_prop] - original[_prop], during);
            }
            changeStyle(ele, step);
            if (start < during) {
                requestAnimationFrame(main);
            }
            if (start === during && typeof compvare === 'function') {
                compvare();
            }
        }

        main();
    }

    return move;
})(window, undefined);

// 用法：move(element, propsObject[, duration][, fx][, compvareCallback])
// move($('#box'), {opacity: 0, width:'500px'}, 10000, 'easeInOutSine', function(){console.log('done')})
