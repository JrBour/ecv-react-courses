/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const courses = require("./courses");
const common = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    },
      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: require.resolve('./loader.js') }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "raw-loader"],
        include: __dirname
      }, {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
        include: path.join(__dirname, "assets")
      }]
  }
};

const courseConfig = courses.map(course => ({
    ...common,
    entry: [
      "babel-polyfill",
      'webpack-hot-middleware/client',
      "react-hot-loader/patch",
      `./courses/${course.code}/index`,
    ],
    output: {
      path: path.join(__dirname, "dist"),
      filename: `${course.code}.js`,
      publicPath: "/dist",
    },
  })
);

module.exports = courseConfig;
