const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './API/api.js',
    mode: 'development',
    module: {
        rules: [
            { test: /\.html$/i, use: 'html-loader' },
            { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist2'),
        filename: 'index_bundle2.js'
      },
    plugins: [
        new HtmlWebpackPlugin(
            {template:'./API/api_int.html',}
            
        )
      ]
}