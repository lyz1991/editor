const path = require('path')
module.exports = {
  entry: './editor.js',
  mode: 'development',
  output:  {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  }
}