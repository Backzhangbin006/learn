HTTP协议  req  response
状态码：HTTP响应（response）中包含状态码
浏览器 代理 proxy 
1xx  请求正在处理，继续等待
2xx  请求已经成功处理掉了   200  OK
3xx  重定向 需要进一步的操作以完成请求 Location
4xx  用户出现的错误（地址错了） 未受权限  受限资源 404 not found
5xx  服务器发端出现错误


301  永久跳转
用户  www.a.com    www.xiaomi.com   www.mi.com
告诉蜘蛛
www.xiaomi.com/a.html  红米手机
废弃了， 301  www.mi.com/a.html
3xx  区别，  永久跳转，告诉蜘蛛把记录更新掉
301 可以在改变状态码，不变，来展示理解
http://localhost:300  301 永久跳转
再次访问，浏览器有缓存，不需要再走服务器

302 临时跳转，不会告知蜘蛛或在前端缓存54