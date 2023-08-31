// 所有全局变量出了global本省，都是全局变量。可以直接访问global的属性。
// var 定义的是全局变量

// 输出当前文件绝对路径
console.log(__filename);
// 输出当前目录绝对路径
console.log(__dirname);

// 设置超时 , 可以清除超时
// setTimeout 只调用一次
// setInterval 间隔调用多次
function printHello() {
    let a = 0;
    a++;
    console.log(a, " Hello, World!");
}


console.log("> setInterval")
let t = setInterval(printHello, 2000);

setTimeout(function () {
    clearInterval(t);
}, 5000);

// 控制台打印
console.log("> log");
console.info("> info");
console.error("> std error");
console.warn("> warn");
// console.trace("> std error stack");
// console.dir();
// console.time();


// process 进程状态对象
// 相关事件：
// exit 退出时调用
// signal 信号事件
// 还有一些其他的，用到了再说
process.on('exit', function (code) {
    // 以下代码永远不会执行
    console.log('program exit', code);
});


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());