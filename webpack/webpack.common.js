require('dotenv').config();

const Path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const FAVICONS_PATH = Path.resolve(
  __dirname,
  '..',
  'favicons',
  process.env.REGION || 'berlin'
);

// Used to prove domain ownership for Mailjet
const MAILJET_AUTH_FILE = '3e83a85511f70bef9fbe500647d70221.txt';

// Babel plugins used both by TS and JS loader
const BABEL_PLUGINS =
  process.env.NODE_ENV === 'production' ||
  process.env.CYPRESS_INTERNAL_ENV === 'production'
    ? []
    : [require.resolve('react-refresh/babel')];

module.exports = {
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    // copy data folder to make it available in redux loadData action
    new CopyWebpackPlugin({
      patterns: [
        { from: Path.resolve(__dirname, '../public/markdown'), to: 'markdown' },
        { from: Path.resolve(__dirname, '../_redirects') },
        { from: Path.resolve(__dirname, FAVICONS_PATH) },
        { from: Path.resolve(__dirname, '../public/data'), to: 'data' },
        { from: Path.resolve(__dirname, '../public/uploads'), to: 'uploads' },
        {
          from: Path.resolve(__dirname, '..', 'public', MAILJET_AUTH_FILE),
        },
      ],
    }),
    // Imports `.env.defaults` and updates them with the values from here.
    new Dotenv({ defaults: true, systemvars: true }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '~': Path.resolve(__dirname, Path.join('..', 'src')),
      cypress: Path.resolve(__dirname, '../cypress'),
      process: 'process/browser',
    },
    fallback: {
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.js$/,
        include: [
          Path.resolve(__dirname, '../node_modules/@mapbox/mapbox-gl-draw'),
          Path.resolve(__dirname, '../node_modules/d3-array'),
          Path.resolve(__dirname, '../node_modules/d3-scale'),
          Path.resolve(__dirname, '../node_modules/debug'),
          Path.resolve(__dirname, '../node_modules/ky'),
          Path.resolve(__dirname, '../node_modules/tr46'),
          Path.resolve(__dirname, '../node_modules/webidl-conversions'),
          Path.resolve(__dirname, '../node_modules/whatwg-url'),
          Path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: BABEL_PLUGINS,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: BABEL_PLUGINS,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: process.env.NODE_ENV !== 'production',
            },
          },
        ],
        include: [Path.resolve(__dirname, '../src')],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: BABEL_PLUGINS,
            },
          },
        ],
        include: [Path.resolve(__dirname, '../src')],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            exclude: /node_modules/,
            use: [
              'babel-loader',
              {
                loader: 'react-svg-loader',
                options: {
                  svgo: {
                    plugins: [{ cleanupIDs: false }, { removeViewBox: false }],
                  },
                },
              },
            ],
          },
          {
            include: /node_modules/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          },
        ],
      },
    ],
  },
};
