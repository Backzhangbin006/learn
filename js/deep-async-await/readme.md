## async
async 函数就是 Generator 函数的语法糖。

##  generate 函数
```js
function* test () {    //generate函数模式
      let a = yield 1
      console.log(a);
      let b = yield 2
      console.log(b);
      let c = yield 3
      console.log(c);
    }
    // 惰性的
    var g = test();
```
通过 g.next() 一步一步调用
每一次调用执行到 yield 关键词, yield 后的语句作为值输出
通过传参 做可做为上一个 yield 语句的返回值

##  
{
  test:/\.js$/
  use:['babel-loader]
}
babelrc

## Promise.resolve
返回 Promise
1. 如果是一个 promise 返回该 promise
2. 如果是一个 resolve