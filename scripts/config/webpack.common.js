const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PostcssFlexBugsFixes = require('postcss-flexbugs-fixes')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const PostcssPresetEnv = require('postcss-preset-env')
const PostcssNormalize = require('postcss-normalize')
const {PROJECT_PATH, IS_DEVELOPMENT, IS_OPEN_HARD_SOURCE} = require('../constant')

const getCssLoaders = importLoaders => [
  IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: IS_DEVELOPMENT,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        ident: 'postcss',
        plugins: [
          PostcssFlexBugsFixes,
          PostcssPresetEnv({
            autoprefixer: {
              grid: true,
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          PostcssNormalize,
        ],
      },
      sourceMap: IS_DEVELOPMENT,
    },
  },
]

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/index.tsx'),
  },
  output: {
    filename: `js/[name]${IS_DEVELOPMENT ? '' : '.[hash:8]'}.js`,
    path: path.resolve(PROJECT_PATH, './build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      src: path.resolve(PROJECT_PATH, './src'),
      components: path.resolve(PROJECT_PATH, './src/components'),
    },
  },
  externals: {
    /* react: 'react',
    'react-dom': 'react-dom' */
  },
  optimization: {
    minimize: !IS_DEVELOPMENT,
    minimizer: [
      !IS_DEVELOPMENT &&
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {
            compress: {pure_funcs: ['console.log']},
          },
        }),
      !IS_DEVELOPMENT && new OptimizeCssAssetsPlugin(),
    ].filter(Boolean),
    splitChunks: {
      chunks: 'all',
      name: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: {cacheDirectory: true},
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: IS_DEVELOPMENT,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEVELOPMENT,
              publicPath: '../',
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[contenthash:8].[ext]',
            publicPath: './assets/images/',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[contenthash:8].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false,
      minify: IS_DEVELOPMENT
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(PROJECT_PATH, './public'),
          from: '*',
          to: path.resolve(PROJECT_PATH, './build'),
          toType: 'dir',
        },
      ],
    }),
    new WebpackBar({
      name: IS_DEVELOPMENT ? '正在启动' : '正在打包',
      color: '#fa8c16',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(PROJECT_PATH, './tsconfig.json'),
      },
    }),
    IS_OPEN_HARD_SOURCE && new HardSourceWebpackPlugin(),
    IS_DEVELOPMENT
      ? () => false
      : new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
          ignoreOrder: false,
        }),
  ],
}
