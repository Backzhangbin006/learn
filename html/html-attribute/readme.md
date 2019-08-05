## script
1. 下载  2. 执行
1. async
  1. html parse / 下载  并行
  2. 下载完就执行 顺序无法控制
2. defer
  1. html parse / 下载  并行
  2. 整个文档加载完成之后 按照 script 在文档中出现的顺序执行
3. 没有属性
  1. html parse 和 js 下载 执行 都是互斥的

## crossoriqin
用于可以引入跨域资源的标签：img link script
crossoriqin 代表要协商跨域
后段没设置 Access-control-* 就会出错
1. annoymous
  如果使用这个值，会在请求头中加一个origin属性
2. use-credentials
  请求的时候带上cookie等用户验证的信息
  如果未设置cros，跨域js发生了错误，将会向window.onerror 提供很少的信息，通过crossorigin属性得到详细的信息