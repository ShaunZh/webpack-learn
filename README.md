# webpack-learn
## 第一部分：基本操作
- `npm init`： 初始化
- `npm install webpack --save-dev`: 安装webpack
- 创建文件及文件夹
- 初步配置webpack.config.js
  - 文件入口地址: 
  - 文件输出路径
  - 最终输出的文件
  ```
  const path = require('path');
  module.exports = {
    entry: './app/index.js',    // 入口文件
    output: {
      path: path.resolve(__dirname, 'build'),  // 输出文件夹路径，必须是绝对路径
      filename: "bundle.js"   // 打包后的输出文件
    }
  }
  ```
