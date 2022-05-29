const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const srcPath = path.join('src');

module.exports = () => {
  return {
    entry: './src/index.ts',
    mode: 'development',
    stats: 'errors-only',

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.ts'],
      modules: [srcPath, 'node_modules'],
      alias: {
        '@helpers': path.resolve(__dirname, 'src/_helpers'),
        '@math': path.resolve(__dirname, 'src/_math'),
      },
    },

    devtool: 'inline-source-map',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      clean: true,
    },

    devServer: {
      historyApiFallback: {
        verbose: true,
      },
      open: true,
      compress: true,
      port: 8080,
      client: {
        logging: 'error',
        overlay: { errors: true, warnings: false },
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'nn-ts',
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true,
      }),
    ],
  };
};
