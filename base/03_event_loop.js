let events = require("events");
let eventEmitter = new events.EventEmitter();
let connectHandler = function connected() {
    console.log('connect success');
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('received data success。');
});

setTimeout(function() {
    eventEmitter.emit('connection');
}, 1000);
// 触发 connection 事件
console.log("over");

// 非阻塞io读取事件，读取到就执行事件回调。
// 上面先触发 connection，执行 connectHandler
// connectHandler 中 触发 data_received ,执行回调函数。
