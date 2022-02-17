/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log('context', process.cwd().replace(/\\/g, '/'));
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: false,
  //指定当前的根目录
  context: process.cwd().replace(/\\/g, '/'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  //在webpack解析loader的时候配置如何查找
  resolveLoader: {
    //配置别名
    // alias: {
    //   'inline1-loader': path.resolve(__dirname, 'loaders', 'inline1-loader.js'),
    //   'inline2-loader': path.resolve(__dirname, 'loaders', 'inline2-loader.js'),
    //   'babel-loader': path.resolve(__dirname, 'loaders', 'babel-loader'),
    // },
    //配置去哪些目录里找loader
    // 首先去 node_modules 找，找不到去当前目录下 loaders 目录找
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [],
          },
        },
      },
      {
        test: /\.less$/,
        // 使用 style-loader 与 less-loader 
        use: ['style-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
