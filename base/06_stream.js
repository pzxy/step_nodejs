// 流式处理数据
// Node.js，Stream 有四种流类型：
// Readable - 可读操作。
// Writable - 可写操作。
// Duplex - 可读可写操作.
// Transform - 操作被写入数据，然后读出结果。

// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

// 写文件
console.log(">> write file")
let fs = require('fs');
let data = "竹杖芒鞋轻胜马";
let writeStream = fs.createWriteStream("out.txt");
writeStream.write(data, "utf8");
writeStream.end();

writeStream.on("finish", function () {
    console.log("write finished");
})

writeStream.on("error", function (err) {
    console.log(err.stack);
})

console.log("write over");

// 读文件
console.log(">> read file");
let readerStream = fs.createReadStream('in.txt');
let data2 = '';
readerStream.setEncoding("utf8");

readerStream.on('data', function (chunk) {
    data2 += chunk;
});

readerStream.on('end', function () {
    console.log(data2);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});


// 管道流
console.log(">> pipe")
let writeStream2 = fs.createWriteStream("out2.txt");

// data  readerStream -> writeStream
readerStream.pipe(writeStream2);

// 链式处理，文件压缩和解压
console.log(">> chain stream")
let fs2 = require("fs");
let zlib2 = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs2.createReadStream('in.txt')
    .pipe(zlib2.createGzip())
    .pipe(fs2.createWriteStream('input.txt.gz'));
console.log("zip finished")

// 等待一秒，完全写入成功。
setTimeout(function () {
// 解压
    let fs3 = require("fs");
    let zlib3 = require('zlib');
    fs3.createReadStream('input.txt.gz')
        .pipe(zlib3.createGunzip())
        .pipe(fs3.createWriteStream('input.txt'));

    console.log("unzip finished")
}, 1000);

// 发现打印是下面这样的，因为上面给 finish & data 事件中打印了一些东西，从一方面说明了，事件是全局的。
//zip finished
// write finished
// in竹杖芒鞋轻胜马
// unzip finished


