const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: 'inferno',
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: './build',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?modules&sourceMap', 'sass-loader?modules&sourceMap']
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // Specify the common bundle's name.
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ]
};
