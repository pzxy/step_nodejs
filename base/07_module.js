// nodejs文件的模块系统和rust是一样的，一个文件就相当于一个mod

let b = require("./07_module_hello");
b.aa();

let B = require("./07_module_hello2");
let hello = new B();
hello.setName("world !!!");
hello.sayHello();