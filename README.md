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

- 使用css-loader和style-loader对css文件进行处理，并使用ExtractTextPlugin对css文件进行单独打包输出
- 至此，第一部分-基本操作完成

## 第二部分：实际项目中的使用
- **分离代码**
  在开发中，需要用到很多库，而这些库一般情况是不需要经常更改的，所以，要将依赖的库与我们自己编写的代码分离开来 
