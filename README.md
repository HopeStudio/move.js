# move.js
一个轻量型 DOM 动画框架

## 特性
1. 无外部库依赖
2. 参数灵活且友好
3. 动画流畅，保证 60 帧每秒
4. 支持 http://easings.net/zh-cn 上所有的缓动特效
5. 支持多个元素同时运动
6. 支持动画完结回调，实现链式动画
7. 支持 CSS3 transform 动画

## 主函数：move(element, props[, duration][, fx][, complete])
对可选参数的先后顺序无要求，但对数据类型有要求。

### element
Type：`HTMLElement`

需要添加动画的 DOM 元素

### props
Type：`Object`

样式配置对象，支持大部分动画属性（自动补全、纠正单位），例如：
```javascript
move(document.body, {
    width: 500,
    // 单位 'px' 会自动补全，推荐直接使用数值
    borderTopWidth: '100px',
    opacity: 0.5,
    // backgroundSize 可以使用百分数字符串（'110%'）也可以使用数值（1.1）表示
    backgroundSize: 1.1,
    // CSS3 动画支持，详细说明见[扩展 - CSS3 动画](#扩展css3-动画)
    translateX: 300
});
```
> 查看支持哪些属性，请去往 [Demo](http://yangfch3.com/move.js/) 和 [Demo - CSS3 动画演示](http://yangfch3.com/move.js/)。

### duration
Type：`Number`

动画耗时，默认为 400ms

### fx
Type：`String`

缓动函数名，默认为匀速线性变化，所有支持的缓动函数名称见：[http://easings.net/zh-cn](http://easings.net/zh-cn)
> 注：缓动函数全部存储在 Math.TWEEN 属性对象上，打开控制台打印 Math.TWEEN 查看详情。

### complete
Type：`Fucntion`

动画完毕时的回调函数，**可以借助回调函数实现链式动画**。

## 多个元素同时运动
有两种方式帮助我们实现多个元素同时运动
```javascript
// 方式1：#a, #b, #c 同时运动
move($('#a'), {width: 300});
move($('#b'), {width: 1000});
move($('#c'), {opacity: .5});
```

```javascript
// 方式2：类名为 .box 所有元素同时运动
move.each(document.getElementsByClassName('.box'), {width: 1000, opacity: 0.5});
// 支持回调
move.each($$('div'), {opacity: 0.5}, 1000, function() {
  move.each(document.getElementsByTagName('DIV'), {height: 100, opacity: 1, marginTop: 20}, 1000)
});
```

## 扩展：CSS3 动画
框架支持 CSS3 transform 动画（见 [Demo](http://yangfch3.com/move.js/index_css3.html)），但是是有条件地支持：

1. 框架**只获取与解析你在 DOM 元素的 style 属性内声明的 transform 属性**，写在 CSS 文件内的 transform 属性不获取
2. 支持的变形函数：`translateX` `translateY` `translateZ` `rotate` `rotateX` `rotateY` `rotateZ` `scale` `scaleX` `scaleY` `scaleZ` `skew` `skewX` `skewY` `perspective`

> 现代浏览器获取计算后的 transform 时返回的是一个 matrix() 函数，处理提取起来比较困难，所以本框架默认支持提取与解析 DOM 元素 style 属性内的 transform 属性。所以，如果你对 CSS3 动画及其性能有较高要求，请直接使用 CSS3 原生动画。

## 页面滚动动画：move.scroll(target[, duration][, fx][, completeCallback])
例如：滚动至页面顶部
```javascript
move.scroll(0, 1000, 'easeInQuad', function() {
    console.log('done!');
})
```

例如：滚动至页面底部
```javascript
move.scroll(document.body.scrollHeight, 'easeInOutExpo');
```

## TODO
- [x] 兼容至 ~~IE8~~ IE9（天猫和淘宝近期宣布放弃对 IE8 的支持，腾讯企业号和企业微信近期也决定放弃对 IE8 的支持）
- [x] 支持 `backgroundSize` 百分字符串与数值两种值类型
- [x] Demo 完善，功能展示补全
- [x] 支持 CSS3 属性动画
- [x] 添加页面滚动动画支持 `move.scroll()`
- [x] 支持多个元素同时运动 `move.each()`

---
如果这个运动框架帮助你更高效地开发，希望你能回来这里点个 Star！
