const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'compiled.js',
    path: path.resolve(__dirname, 'public/src'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
