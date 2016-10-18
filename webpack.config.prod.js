var config = require('./webpack.config.default'),
    webpack = require('webpack');


config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
     compressor: {
       warnings: false,
     }})
);


module.exports = config;
