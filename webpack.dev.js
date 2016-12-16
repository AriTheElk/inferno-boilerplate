const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
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
  devServer: {
    contentBase: './',
    port: 4000,
    noInfo: false,
    hot: true,
    inline: true,
    proxy: {
      '/': {
        bypass: function () {
          return '/public/index.html';
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
