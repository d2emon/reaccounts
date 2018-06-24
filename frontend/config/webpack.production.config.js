import Config from 'webpack-config';

export default new Config().extend('config/webpack.optimization.config').merge({
  output: {
    filename: 'bundle.min.js'
  }
});
