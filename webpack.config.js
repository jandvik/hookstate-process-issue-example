const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/client'),
    port: Number(process.env.WEBPACK_PORT),
    historyApiFallback: true,
  },
  optimization: {
    minimize: Boolean(process.env.WEBPACK_MINIFY === 'true'),
  },

  output: {
    chunkFilename: '[name].[chunkhash].bundle.js',
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(process.cwd(), 'dist/client'),
    publicPath: process.env.WEBPACK_PUBLIC_PATH,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules|\.test\.tsx/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
