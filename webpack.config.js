const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
module.exports = {
  entry: './editor.js',
  mode: 'development',
  output:  {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module:{
    rules: [
      {
        test: /\.less$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => {
          return [
            require("autoprefixer")({
              browsers: ['ie>=8','>1% in CN']
            })
          ]
        }
      }
    })
  ]
}