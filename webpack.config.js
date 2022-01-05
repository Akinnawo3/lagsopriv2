/**
 * Webpack Config
 */
// const webpack = require('webpack');
const path = require("path");
const fs = require("fs");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = "/";

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// plugins
// const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./src/index.js"],
  output: {
    // The build folder.
    path: resolveApp("dist"),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: "static/js/[name].[hash:8].js",
    chunkFilename: "static/js/[name].[hash:8].chunk.js",
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
  },
  devServer: {
    contentBase: "./src/index.js",
    host: "0.0.0.0",
    compress: true,
    port: 3000, // port number
    historyApiFallback: true,
    quiet: true,
  },
  // resolve alias (Absolute paths)
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, "src/actions/"),
      Components: path.resolve(__dirname, "src/components/"),
      Assets: path.resolve(__dirname, "src/assets/"),
      Util: path.resolve(__dirname, "src/util/"),
      Routes: path.resolve(__dirname, "src/routes/"),
      Constants: path.resolve(__dirname, "src/constants/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Api: path.resolve(__dirname, "src/api/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
      // Scss compiler
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader", // inject CSS to page
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              },
            },
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // Enable file caching
        cache: true,
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,

        uglifyOptions: {
          compress: false,
          ecma: 8,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },
  plugins: [
    new Dotenv(),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin({
      dry: false,
      verbose: false,
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
    }),
    // new HtmlWebPackPlugin({
    //   template: "./public/firebase-messaging-sw.js",
    //   filename: "./firebase-messaging-sw.js",
    //   inject: false,
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "static/css/[name].[hash:8].css",
    }),
    // new BundleAnalyzerPlugin()
  ],
};
