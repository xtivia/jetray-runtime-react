var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
      'react_runtime': [path.join(__dirname, "src", "react_runtime.js")]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].dll.js",
      library: "[name]"
    },
    plugins: [
      new webpack.DllPlugin({
        path: 'dist/[name]-manifest.json',
        name: "[name]"
      }),
      new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
      new webpack.optimize.UglifyJsPlugin(),
      new CleanWebpackPlugin(['dist'], {root: __dirname, verbose: true, dry: false}),
    ],
};
