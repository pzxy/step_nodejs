let fs = require("fs");
fs.readFile("demo.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log("------------------------over---------------------");
// 使用回调来异步。