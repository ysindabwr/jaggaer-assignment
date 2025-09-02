import { resolve as _resolve } from 'path';
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;
  return {
    entry: _resolve(__dirname, 'src', 'index.tsx'),
    output: {
  path: _resolve(__dirname, 'dist'),
  filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
  publicPath: '/',
},
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      modules: [_resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@': _resolve(__dirname, 'src'),
      },
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader', options: { cacheDirectory: true } },
        },
        {
          test: /\.module\.css$/i,
          use: [
            isDev ? 'style-loader' : _loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:6]',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            isDev ? 'style-loader' : _loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          type: 'asset/resource',
          generator: { filename: 'images/[hash][ext][query]' },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[hash][ext][query]' },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: _resolve(__dirname, 'src', 'index.html'),
        favicon: false,
      }),
      new ForkTsCheckerWebpackPlugin({ async: isDev }),
      new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'], emitWarning: isDev }),
      new Dotenv({ systemvars: true }),
      isDev && new ReactRefreshWebpackPlugin(),
      !isDev && new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      }),
    ].filter(Boolean),
    optimization: {
      splitChunks: { chunks: 'all' },
      runtimeChunk: 'single',
      minimize: isProd,
      minimizer: [new TerserPlugin({ parallel: true }), new CssMinimizerPlugin()],
    },
    devServer: {
      hot: true,
      open: true,
      historyApiFallback: true,
      port: 3000,
      static: { directory: _resolve(__dirname, 'public') },
    },
    performance: { hints: isProd ? 'warning' : false },
  };
};
