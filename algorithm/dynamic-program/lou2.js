// 什么可以存储之前的楼数？
// 变量
function lou(n) {
   if (n < 0) {
       return 0;
   }
   if (n == 1) {
       return 1;
   }
   if (n == 2) {
       return 2;
   }
//    抽象能力
    var a = 1, b = 2, temp = 0;
    // a n-2阶，b n-1阶 temp  n
    // a->b b->temp temp->a+b
    for (var i = 3; i <= n; i++) {
    //    temp?
    temp = a + b;
    a = b; b = temp;
    }
    return temp;
}
console.log(lou(12));