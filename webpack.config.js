const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: "index.html",
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, "./src/index.html")
});

module.exports = {
  // 开发模式
  mode: "development",
  // 配置入口文件
  entry: ["./src/index.js", "./src/jquery.js"],
  // 出口文件目录为根目录下dist, 输出的文件名为main
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "localhost:8000",
    filename: "main.js",
    publicPath: "/"
  },
  // 配置开发服务器, 并配置自动刷新
  devServer: {
    // 根目录下dist为基本目录
    contentBase: path.join(__dirname, "dist"),
    // 自动压缩代码
    compress: true,
    // 服务端口为1208
    port: 1208,
    // 自动打开浏览器
    open: true,
    hot: true,
    historyApiFallback: true
  },

  module: {
    // 根据文件后缀匹配规则
    rules: [
      // 配置js/jsx语法解析
      {
        test: /\.js|jsx$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //图片大小小于等于limit值，则会以base64形式加载，不会发请求，大于这个值则用file-loader加载
              limit: 1 * 1024,
              outputPath: "img/"
            }
          }
        ]
      }
    ]
  },
  // 装载虚拟目录插件
  plugins: [htmlWebpackPlugin, new webpack.HotModuleReplacementPlugin()]
};
