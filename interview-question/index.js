// function Person (name) {
//   this.name = name
// }
// let p = new Person('wn')
// 1.p.__proto__等于什么  -> Person.prototype 
// 2. Person.__proto__  = Function.prototype   
// 函数的隐式原型链__proto__是构造函数Function，Function的隐式原型链__proto__是Object



// var foo = {},  //  定义一个对象
//   F = function() {};
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)   // 输出为valA,
// console.log(foo.b)   // 输出为undefined,此时的foo相当于和Function同级，没有继承关系，
// console.log(F.a)     // 输出为valA, F.__proto__ -> Function.prototype, Function.__proto__ -> Object.prototype,所以F.a最后继承到了Object的原型链
// console.log(F.b)     // 输出为valB,  实现继承关系，F 拿到 Function的原型链



// function Person (name) {
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p)   // 输出{}

// ------构造函数是不需要返回值的，使用new来创建对象时，如果有返回值return 的是非对象{}会忽略返回值，如果return的是对象，
// 则返回该对象 (若return null 也会忽略返回值，null不属于对象，也不属于其他的格式)



// function Person (name) {
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student  // constructor函数构造器,此时Student和Perosn一样为一个构造函数

// let s = new Student('wn')
// console.log(s instanceof Person)  // 返回为true   (instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置)
//  for (let i = 0; i < 10; i++) { // 使用let输出10个10，使用var输出0-9
//    setTimeout(() => {
//      console.log(i)
//    }, 0);
//  }
// for(var i = 0; i < 10; i++) {  //使用闭包实现输出0-9，闭包能创建块级作用域，但是一般不建议使用
//   (function(i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 0);
//   })(i)
// }
//  ---- let 每次循环会生成一个封闭的作用域和setTimeout绑定，var 每次循环会覆盖掉上一次的作用域



// var myArry = [1, 2, 3, 4, 5, 6, 7]
// for(let index in myArry) {   // for(let index in myArry)遍历数组下标(索引)，输出0-6，for(let index of myArry)遍历数组元素，输出1-7
//   console.log(index)
// }
// Array.prototype.method = function () {
//   console.log('wn')
// }
// var myArry = [1, 2, 3, 4, 5, 6, 7]
// myArry.name = 'wn'
// for(let index in myArry) {   
//   console.log(myArry[index])  // 当使用for  in 遍历数组时使用myArry[index]，但是建议不用
// }
// for in
// 1. index 索引为字符串型的数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的，
// 3. 使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引，for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型属性和索引



let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]
let oArr = [1, 2, 3, 4, 5, 2, 7, 3, 9]

// 方法1
// function outputArr(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))  // concat 拼接方法，arr[i])只要有数组无限调用
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }
function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}
console.log(outputArr(gArr))
