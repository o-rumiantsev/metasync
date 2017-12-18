'use strict';

const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const license = fs.readFileSync(path.join(__dirname, 'LICENSE')).toString();
const distDir = 'dist';

module.exports = {
  entry: ['babel-polyfill', './dist/metasync.js'],
  output: {
    path: path.join(__dirname, distDir),
    filename: 'metasync.min.js',
    sourceMapFilename: 'metasync.min.js.map',
    library: 'metasync',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true
    }),
    new webpack.BannerPlugin({
      banner: license,
    }),
  ],
};
