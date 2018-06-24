import Config from 'webpack-config';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default new Config().extend('config/webpack.base.config').merge({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
	  mangle: {
	    keep_fnames: true
	  }
	}
      })
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
 
});
