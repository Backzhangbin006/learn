- JS 垃圾回收是自动的
- 回收内存
  function 局部变量
  跨页面时
1. 可达性 作为评判的依据的
  显而易见，因为一些原因不可诶删除
  - 全局变量  //  不会删除
  - 当前嵌套调用链上的其他函数的变量和参数
  这些值称为根
2. 如果引用或者引用链可以从根访问任何其他值，则认为该值可访问

let user = {
  name: 'jack'
}
glboal
  |
  Object
name: 'jack'
user 全局变量,   = 引用式赋值
name 基础属性 -> 字符串类型的JACK

user = null;  // 触发一次垃圾回收


let user = {
  name: 'jack'
}
let admin = user;
      global
user          admin
      Object
user = null;