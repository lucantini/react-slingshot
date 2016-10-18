var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css', {
    allChunks: true
  })
  project_path = path.join(__dirname, 'app'),
  dist_path = path.join(__dirname, 'build');

module.exports = config = {
  entry: path.join(project_path, 'src', 'index.js'),
  output: {
    path: dist_path,
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    root: project_path,
    alias: {
      images: 'src/images',
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    extractCSS,
    new HtmlWebpackPlugin({
      template:  path.join(project_path,'src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(dist_path)
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        // define an exclude so we check just the files we need
        exclude: /(node_modules)/,
      }
    ],
    loaders: [{
      test: /\.styl/,
      exclude: [/(node_modules)/, /\*spec.js/],
      loader: extractCSS.extract('style', ['css?sourceMap', 'resolve-url', 'postcss', 'stylus?sourceMap']),
    },
    {
      test: /\.js$/,
      exclude: [/(node_modules)/, /\*spec.js/],
      loaders: ['babel'],
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'resolve-url']
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file',
      query: {
        name: 'css/fonts/[name].[ext]'
      }
    }, {
      //IMAGE LOADER
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'file',
      query: {
        name: 'images/[name].[ext]'
      }
    }, {
      // HTML LOADER
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  postcssConf: [autoprefixer({
    browsers: ['last 2 versions']
  })]

};
