
const path = require('path');
module.exports = {
  entry: './app/index.js',   //入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 使用绝对路径输出文件夹
    filename: "bundle.js"   // 打包后输出文件的文件名
  }
}
