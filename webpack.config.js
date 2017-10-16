const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-eval-source-map',
 entry: {
   app: [
   'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'webclient', 'Homepage.jsx')]
 },
 output: {
   path: path.join(__dirname, 'webclient', 'dist'),
   publicPath: '/dist/',
   filename: 'bundle.js'
 },
 module: {
     loaders: [{
               test: /\.jsx$/,
               loaders: [
                            'react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
                         ]
              },
              {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
                // include: [/flexboxgrid/,/react-select/]
              },
              {

                test: /\.json$/,
                loaders: ['json-loader']

            }]
 },
 watch: true,
 resolve: {
   extensions: ['', '.js', '.jsx', '/index.js', '/index.jsx', '.css']
 },
 plugins: [
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
       new ExtractTextPlugin('style.css')
      // new HtmlWebpackPlugin({ template: path.resolve('./webclient/index.html') })
      ],
    node: {
           fs: 'empty',
           net: 'empty',
           tls: 'empty'
         }
};
