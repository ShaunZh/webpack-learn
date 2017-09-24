
const path = require('path');
module.exports = {
  entry: './app/index.js',   //入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 使用绝对路径输出文件夹
    filename: "bundle.js"   // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        // js 文件处理
	test: /\.js$/,
	// loader
	use: 'babel-loader',
	// 不包含的路径
	exclude: /node_modules/
      }
    ]
  }
}
