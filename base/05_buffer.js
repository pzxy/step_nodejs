// nodejs没有二进制数据类型，提供了专门的Buffer类来处理流数据。它对英语v8堆内存之外的一块原始内存。

const buf = Buffer.from("hello world", "ascii");
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf8'));
console.log(buf.toString('binary'));
console.log(buf.toJSON());

// 缓冲区Buffer可以创建、合并、比较、拷贝、裁剪、获取长度等，方法很多，用到了再看。