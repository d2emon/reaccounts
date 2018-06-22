import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config').merge({
  output: {
    filename: 'bundle.min.js'
  }
});
