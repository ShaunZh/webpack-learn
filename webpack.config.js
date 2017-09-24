
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/index.js',   //入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 使用绝对路径输出文件夹
    filename: "bundle.js",  // 打包后输出文件的文件名
    publicPath: 'build/'    // 指定资源的搜索路径
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
      }, 
      {
        // 图片文件
	test: /\.(png|jpeg|gif|svg|jpg)(\?.*)?$/,
	use: [
	  {
	    loader: 'url-loader',
	    // 配置 url-loader 的可选项
	    options: {
	      // 限制图片大小 10000， 小于限制会将图片转换为 base64 格式
	      limit: 10000,
	      // build/imgs/[图片名].[hash].[图片格式]
	      name: 'imgs/[name].[hash].[ext]'
	    }
	  } 
	]
      },
      {
        test: /\.css$/,
	// 使用ExtractTextPlugin 将css作为单独的文件打包输出
	loader: ExtractTextPlugin.extract({
	 // 必须这样写，否则会报错
	  fallback: 'style-loader',
	  use: [{
	    loader: 'css-loader',
	    options: {
	      modules: true
	    }
	  }]
	})
      },
    ]
  },
      // 插件列表
      plugins: [
        // 输出的文件路径
	new ExtractTextPlugin('css/[name].[hash].css')
      ]

}
