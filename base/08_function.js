// 很正常的函数调用
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");
execute(function (args) {
    console.log(args)
}, "World");

