const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack').NormalModuleReplacementPlugin;

module.exports = {
  entry: './index.web.js',
  mode: 'development',
  devServer: {
    static: './web',
    port: 3000,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:@react-native/babel-preset'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-audio-api$': 'react-native-audio-api/lib/module/api.web.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './web/index.html',
    }),
    new NormalModuleReplacementPlugin(
      /react-native-worklets\/package\.json$/,
      path.resolve(__dirname, 'webpack.worklets.stub.js')
    ),
    new NormalModuleReplacementPlugin(
      /^react-native-worklets$/,
      path.resolve(__dirname, 'webpack.worklets.module.stub.js')
    ),
    new NormalModuleReplacementPlugin(
      /react-native-audio-api\/lib\/module\/types\.js$/,
      path.resolve(__dirname, 'webpack.types.stub.js')
    ),
  ],
};

