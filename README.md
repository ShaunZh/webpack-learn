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
      filename: "bundle.js",   // 打包后的输出文件
      publicPath: 'build/'     // 指定资源的搜索路径
    }
  }
  ```
- 使用babel处理js文件，主要是对js文件进行转码
  使用的loader：`babel-core, babel-loader, babel-preset-env`

- 使用url-loader对图片文件进行处理，主要是根据文件的内容，生成MD5的文件后缀名,
