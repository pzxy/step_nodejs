// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。
// 所有这些产生事件的对象都是 events.EventEmitter 的实例。


//事件： 指“some_event”
//监听器： 指回调函数
// event.on('some_event', function() {
//     console.log('some_event 事件触发');
// });

// 注意：一般我们不主动创建EventEmitter，都是在对象中继承它。

// 要点1
// 相同事件可以设置多个回调，触发以后按照顺序调用。函数可不同，参数按顺传入。
console.log(">> 1")
let eventEmitter = require("events").EventEmitter;
let event = new eventEmitter();
event.on('some_event', function (arg1, arg2) {
    console.log("some event a", arg1, arg2)
});
let listener2 = function (arg1) {
    console.log("some event b", arg1)
};
event.on('some_event', listener2);
event.emit('some_event', '参数1', '参数2');


// 要点2
// 设置回调只执行一次，和go中sync.Once一样。
console.log(">> 2")
let a = 0;
event.once("event_once", function () {
    a++;
    console.log("a:", a)
});
event.emit("event_once");
event.emit("event_once");

// 要点三
// 查删增 事件回调。
console.log(">> 3");
console.log(event.listeners("some_event").toString());

event.removeListener('some_event',listener2);
console.log("> after remove");
console.log(event.listeners("some_event").toString());

event.addListener('some_event',listener2);
console.log("> after add");
console.log(event.listeners("some_event").toString());

// 要点四，错误处理
// 内置‘error’事件，遇到错误后触发回调，如果我们没有设置回调，则程序结束。
// 设置 error事件回调，相当于 c++ 和 java中的try catch 错误。

