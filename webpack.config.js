const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: "out.js"
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, './dist/'),
    port: 3006
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
