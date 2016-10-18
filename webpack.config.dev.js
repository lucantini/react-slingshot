var config = require('./webpack.config.default'),
    path = require('path'),
    webpack = require('webpack'),
    dist_path = path.join(__dirname, 'build');

config.debug=true;

config.devServer= {
   inline: true,
   contentBase: dist_path,
   hot: true,
   colors: true,
   port: 3333,
   host: '0.0.0.0'
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

config.devtool= 'source-map';

module.exports = config;
