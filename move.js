(function(window, undefined) {
    // CSS3 变换函数列表
    var transform = {
        all: ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'],
        px: ['translateX', 'translateY', 'translateZ', 'perspective'],
        deg: ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'],
        none: ['scale', 'scaleX', 'scaleY', 'scaleZ']
    };

    // 无需补全单位的样式属性
    var noSuffix = ['opacity', 'backgroundSize'].concat(transform.none);

    var TWEEN = Math.TWEEN = {
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

    // 获取元素的某个样式或者整个 style 对象
    // 注意点：transfrom 获取到的计算值是一个 matrix，比较难处理

    function changeStyle(ele, step) {
        var transformStyle = '';
        for (var prop in step) {
            if (noSuffix.indexOf(prop) + 1) {
                if (prop === 'backgroundSize') {
                    ele.style[prop] = step[prop] + '%';
                } else if (prop.indexOf('scale') + 1) {
                    transformStyle = (prop + '(' + step[prop] + ')');
                    var exp = new RegExp('\\s?' + prop + '\\([\\w\\W]+?\\)', 'g'); // 由于 transform 的属性值可能包含多个变形函数，这里就牵涉到一个复写的问题了
                    ele.style.transform = (ele.style.transform || '').replace(exp, '') + transformStyle;
                } else {
                    ele.style[prop] = step[prop];
                }
            } else if (transform.deg.indexOf(prop) + 1) {
                transformStyle = (prop + '(' + step[prop] + 'deg)');
                var exp = new RegExp('\\s?' + prop + '\\([\\w\\W]+?\\)', 'g');
                ele.style.transform = (ele.style.transform || '').replace(exp, '') + transformStyle;
            } else if (transform.px.indexOf(prop) + 1) {
                transformStyle = (prop + '(' + step[prop] + 'px)');
                var exp = new RegExp('\\s?' + prop + '\\([\\w\\W]+?\\)', 'g');
                ele.style.transform = (ele.style.transform || '').replace(exp, '') + transformStyle;
            } else {
                ele.style[prop] = step[prop] + 'px';
            }
        }
    }

    var move = (function() {
        /**
         * 运动框架主功能函数
         * @param  {[HTMLElement]} ele   DOM元素
         * @param  {[Object]} props 变化属性配置对象
         *         width
         *         height
         *         opacity
         *         left, right, top, bottom
         *         margin, marginTop, marginBottom, marginLeft, marginRight
         *         padding, paddingTop, paddingBottom, paddingLeft, paddingRight
         *         borderWidth, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth
         *         backgroundSize
         *         translateX, translateY, translateZ, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, perspective
         */
        /**
         * 可选参数: duration(number), fx(string), complete(function)
         */
        var Move = function(ele, props) {
            if (!(ele instanceof HTMLElement)) {
                return 'move(): 第一个参数必须为 DOM 元素';
            }

            var count = 0;
            var during = Math.ceil(400 / 16.67); // 默认为 400ms，每 16.67ms 每帧
            var original = {};
            var fx = Math.TWEEN.linear;
            var complete = null;

            // 提取函数的 rest 参数 
            for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                rest[_key2 - 2] = arguments[_key2];
            }

            // 智能解析 rest 参数 
            for (var index in rest) {
                if (typeof rest[index] === 'number' && rest[index] > 0) {
                    during = Math.ceil(rest[index] / 16.67);
                }
                if (typeof rest[index] === 'string' && rest[index] in Math.TWEEN) {
                    fx = Math.TWEEN[rest[index]];
                }
                if (typeof rest[index] === 'function') {
                    complete = rest[index];
                }
            }

            // 解析 props 对象，构建终点 CSS 属性对象，同时计算获取原始 CSS 属性对象 
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
                        var transformStyle = (getStyle(ele, 'transform') || '').replace(/\)/g, '').split(/\(|\s+/);
                        var index = transformStyle.indexOf(prop);
                        original[prop] = parseFloat(transformStyle[index + 1]) || (prop.indexOf('scale') + 1 ? 1 : 0);
                    }
                } 

                return processedProps;
            })();

            function main() {
                count++;
                var step = {};
                // 计算获取每一步的 CSS 属性值对象 
                for (var _prop in processedProps) {
                    step[_prop] = fx(count, original[_prop], processedProps[_prop] - original[_prop], during);
                }

                changeStyle(ele, step);
                
                if (count < during) {
                    requestAnimationFrame(main);
                }
                if (count === during && typeof complete === 'function') {
                    complete();
                }
            }
            main();
        };

        Move.scroll = function(target) {
            var count = 0;
            var during = Math.ceil(400 / 16.67); // 默认为 400ms, 16.67ms 每帧
            var original = document.body.scrollTop || window.scrollY;

            var fx = Math.TWEEN.linear;
            var complete = null;

            for (var _len1 = arguments.length, rest = Array(_len1 > 1 ? _len1 - 1 : 0), _key1 = 1; _key1 < _len1; _key1++) {
                rest[_key1 - 1] = arguments[_key1];
            }

            for (var index in rest) {
                if (typeof rest[index] === 'number') {
                    during = Math.ceil(rest[index] / 16.67);
                }
                if (typeof rest[index] === 'string' && rest[index] in Math.TWEEN) {
                    fx = Math.TWEEN[rest[index]];
                }
                if (typeof rest[index] === 'function') {
                    complete = rest[index];
                }
            }

            function main() {
                count++;
                var step = fx(count, original, target - original, during);
                if (document.body.scrollTop + 1) {
                    document.body.scrollTop = step;
                } else {
                    window.scrollY = step;
                }
                if (count < during) {
                    requestAnimationFrame(main);
                }
                if (count === during && typeof complete === 'function') {
                    complete();
                }
            }

            main();
        };

        Move.each = function(eles, props) {
            for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                rest[_key2 - 2] = arguments[_key2];
            }
            // 剔出回调函数
            // 当传入了多个回调函数时，只会取最后一个
            var complete = null;
            var count = 0;
            for (var i in rest) {
                if (typeof rest[i] === 'function') {
                    complete = rest.splice(i, 1)[0];
                }
            }
            if (eles.length >= 1) {
                var eleArr = Array.prototype.slice.call(eles);
                for (var j in eleArr) {
                    Move.apply(null, [eleArr[j], props].concat(rest).concat(function() {
                        count++;
                        // 只有当每个元素的动画都执行完成时才能执行回调函数
                        if (count === eles.length && typeof complete === 'function') {
                            complete();
                        }
                    }));
                }
            } else if (eles) {
                Move.apply(null, [eles, props].concat(rest).concat(complete));
            } else {
                return false;
            }
        };

        return Move;
    })();
    window.move = move;
    // 用法：move(element, propsObject[, duration][, fx][, completeCallback])
    // move($('#box'), {opacity: 0, width:'500px'}, 10000, 'easeInOutSine', function(){console.log('done')})
})(window);
