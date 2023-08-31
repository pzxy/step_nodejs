// 通过exports 暴漏模块的方法。

// 以下两方式，二选一：
// 方式一：这种写法相当于 static 方法，加载模块后直接就能调用。
exports.aa = function (){
    console.log("i am aa");
};

// 方式二
// function Hello() {
//     let name;
//     this.setName = function(thyName) {
//         name = thyName;
//     };
//     this.sayHello = function() {
//         console.log('Hello ' + name);
//     };
// }
// // 这种写法相当于 class，需要new 出来
// module.exports = Hello;
