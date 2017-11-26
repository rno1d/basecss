const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const PRODUCTION = process.env.NODE_ENV === 'production';
const NOSOURCEMAPS = process.env.NODE_ENV === 'nosourcemaps';


const CSS_LOADER = PRODUCTION
? ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
})
: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'];


module.exports = {
  entry: {
    bundle: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.min.js",
  },
  devtool: PRODUCTION || NOSOURCEMAPS ? '' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },]
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: PRODUCTION ? 'main.min.css' : 'main.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 7000,
      server: { baseDir: ['./'] }
    })
  ]
}