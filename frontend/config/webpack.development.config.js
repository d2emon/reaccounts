import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config').merge({
  /*
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    __dirname + '/../index.js'
  ],
  */
  devtool: 'inline-source-map'
  /*
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
  */
});
