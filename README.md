# move.js
一个轻量型 DOM 动画框架

## 主函数：move(element, props[, duration][, fx][, complete])

### element
Type：`HTMLElement`

需要添加动画的 DOM 元素

### props
Type：`Object`

样式配置对象，支持大部分动画属性（自动补全、纠正单位），例如：
```javascript
move(document.body, {
    width: 500,
    opacity: 0.5
})
```
> CSS3 属性动画请直接使用 CSS3 实现。

### duration
Type：`Number`

动画耗时，默认为 400ms

### fx
Type：String
缓动函数名，默认为匀速线性变化，所有支持的缓动函数名称见：[http://easings.net/zh-cn](http://easings.net/zh-cn)
> 注：缓动函数全部存储在 Math.TWEEN 属性对象上，打开控制台打印 Math.TWEEN 查看详情。

### complete
Type：`Fcuntion`
动画完毕时的回调函数

## TODO
- [x] 兼容至 IE9
- [x] 支持 `backgroundSize`
- [x] 透明度动画兼容
- [ ] Demo 完善，功能展示补全