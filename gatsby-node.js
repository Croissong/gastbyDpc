import Webpack from 'webpack';

exports.modifyWebpackConfig = function(config, env) {
  config.plugin("webpack-ignore", Webpack.IgnorePlugin, [/\.org$/]);
  return config;
};
