import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().merge({
  /*
  entry: [
    __dirname + '/../public/index.html',
    __dirname + '/../src/index.js'
  ],
  */
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        // use: 'style-loader!css-loader'
	use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
	})
      },
      {
        test: /.svg$/,
        use: 'svg-loader',
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
  devServer: {
    progress: true,
    hot: true,
    inline: true,
    // color: true,
    host: "0.0.0.0",
    port: 8000
  }
});
