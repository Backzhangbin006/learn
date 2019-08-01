1. 三个容器，背后100%的宽度 拖拽的圆点，已经拖了的进度条
2. touchStart  touchMove  touchEnd
3. 改变 width  left

```js
new Progress('select', {
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,
  disableDrag: false
})
```