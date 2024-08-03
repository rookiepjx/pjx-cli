###编写自定义脚手架

1.自定义的命令 而不是 node 去执行我们的脚本

创建自定义命令
```json
    "bin": {
    "my-cli": "src/index.js"
  },
```

创建软连接,将自定义命令挂载到全局后，自定义命令才能执行
```sh
    npm link
```
2.-V--help create 命令行交互工具 
3.去下载模板 isTs 下载 ts 版本 不要 就下载 js 版本

### 仓库

https://gitee.com/chinafaker/vue-template.git
js
ts

依赖 npm 库
1.commander 支持命令行
2.inquirer 命令行交互
3.ora 命令行动画
4.download-git-repo 下载 git 模板
