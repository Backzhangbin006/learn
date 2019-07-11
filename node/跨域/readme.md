## 跨域
浏览器的安全策略
同源策略：
同协议 域名 端口   同源  不存在跨域
只要协议 端口 域名有一个不同 就是不同源
不同源  存在跨域

## CORS
规定了一组 http 的头部字段的作用是：
允许哪些网站通过浏览器有访问的权限
1. access-X
2. cookie
3. 浏览器会先 以OPTIONS 请求方法发起一个预检 (preflight) 请求，获取一下允不允许当前的域请求，服务器允许
    之后才会发起正式的请求。

## 代理
1. nginx

反向代理：
http://localhost:9999/api/
http://localhost:8888/api/
不知道请求的是哪个服务器

正向代理：
Google
搭载代理服务器再去访问

A -> proxy -> google.com
B -> proxy -> google.com

## iframe + postMessage
1. 前端页面通过iframe引入一个后端目录下面的html，
   iframe是不受同源策略限制的
2. postMessage 用于在两个窗口之间传递数据
3. 前端页面通过postMessage向后端目录下的html传递接口需要的请求参数
4. 后端页面通过postMessage向前端页面传递接口结果

## iframe + window.name
iframe共享window.name

## jsonp
