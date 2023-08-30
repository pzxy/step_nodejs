# 安装环境
```bash
brew install node
brew install npm
```

# 第一个程序
文件名`http.js`
```bash
var http = require('http');

http.createServer(function (request, response) {

// 发送 HTTP 头部 
// HTTP 状态值: 200 : OK
// 内容类型: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});

// 发送响应数据 "Hello World"
response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```
运行命令 `node http.js` ,请求8888端口可以请求到。
上面的`require('http')` 是加载http模块，相当于导入包的概念，其他的模块呢？
其他的模块在 node_modules 目录中。

# 模块管理
```bash
# 升级 npm
sudo npm install npm -g
# 本地安装express模块，本地指的是执行命令的当前目录。会安装到 ./node_modules 目录中
npm install express
# -g 表示全局，全局安装，mac下安装到了 /opt/homebrew/lib/node_modules 下。
# 如何找到呢？ 我们执行 npm list -g 会输出一个路径，这个路径里面就是 node_modules 目录。
npm install express -g
# 卸载模块
npm uninstall express
# 更新模块
npm update express
# 搜索模块
npm search express
# 创建模块生成package.json
npm init
# 注册用户
npm adduser
# 发布模块
npm publish
# 缓存清理
npm cache clean
```

# 模块属性
每个模块中的package.json用来定义模块的属性。这里的路径是 /opt/homebrew/lib/node_modules/express/package.json
```bash
Package.json 属性说明
name - 包名。
version - 包的版本号。
description - 包的描述。
homepage - 包的官网 url 。
author - 包的作者姓名。
contributors - 包的其他贡献者姓名。
dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
keywords - 关键字
```

# 
