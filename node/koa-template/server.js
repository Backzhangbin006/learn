const Koa = require('koa');

const app = new Koa();
const admin = new Koa();

// http.createServer
// req
// res
// context req + res
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
})
app.use(async (ctx, next) => {
  console.log(4);
  await next();
})
app.use(async (ctx) => {   //<strong></strong>强调标签
  console.log(3);
  ctx.body = `
  <strong>tj np</strong>
  `;
});
// http.listen 语法糖  封装后的语法和原生的语法一模一样
app.listen(8080, () => {
  console.log('server is running 8080');
})