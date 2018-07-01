import Config from 'webpack-config';

export default new Config().extend('config/webpack.optimization.config').merge({
  output: {
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
	use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'scss-loader'
          ]
	})
      },
      {
        test: /.svg$/,
        use: 'react-svg-inline-loader',
      },
      /*
      {
        test: /.ico$/,
        use: 'file-loader',
      },
      */
      {
        test: /.html?$/,
        use: 'html-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
      inject: "body"
    }),
    new ExtractTextPlugin('style.css')
  ],
});
