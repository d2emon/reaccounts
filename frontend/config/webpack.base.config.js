import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new Config().merge({
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    /*
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: "body"
    })
    */
  ]
});
