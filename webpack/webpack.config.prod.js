const Webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Autoprefixer = require('autoprefixer');

const common = require('./webpack.common.js');
const Config = require('../config.json');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BABEL_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      inject: true,
      siteUrl: Config.prodUrl,
      template: './src/index.html',
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new UglifyJSPlugin({ sourceMap: true }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.ProvidePlugin({
      config: '~/../config.json'
    }),
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [
                Autoprefixer
              ]
            }
          }
        ]
      }
    ]
  }
});
