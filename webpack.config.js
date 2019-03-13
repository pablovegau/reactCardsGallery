const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const loadPresets = require('./build-utils/loadPresets');

const pathsToClean = { template: './dist' };

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      mode: mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin(), new CleanWebpackPlugin(pathsToClean)],
    },
    modeConfig(mode),
    loadPresets({ mode, presets }),
  );
