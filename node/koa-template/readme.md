## koa 中间件 middleWare
app.use(middleWare);
next 下一个中间件。
每一次use都会注册一个中间件
[middleWare1, middleWare2]
1. async 函数
2. 洋葱模型：一层一层往最里面执行，最后一个中间件执行完了，一层往外冒泡执行剩余的代码
3. 解耦：每一个中间件负责一件事。

以X开头的：自定义响应头

## koa  第三方中间件
 koa ctx  就是 req + res 组成的对象
 ctx: {
   req: {},
   res: {}
 }
 koa-views 
 接着扩展 ctx， 接着往ctx上面塞东西
 ctx: {
   req: {},
   res: {}，
   render: () => {}
 }

##
package.json 项目描述
依赖 npm install 下来的文件
-S   往下面的dependencies放依赖
```json
"dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
  ```
  npm i node_modules 目录
  koa 压缩 -> 500m
  不把node_modules 放在压缩目录里  5m ->
  npm i 从 json文件里面读取依赖 
  -s

  ## ejs
  <%= %> 原样输出
  <%- %> 解析html
  <% %> 解析js