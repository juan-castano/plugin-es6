var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'game-lib.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['@babel/preset-env']
              }
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
