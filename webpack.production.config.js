var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },
    module: {
        loaders: loaders.concat( [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( 'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' )
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: [
                    path.resolve( __dirname, './src' ),
                ],
            },
        ])
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './src/index.html', to: './index.html' }]),
        new ExtractTextPlugin( 'styles.css' ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin( {
            sourceMap: true,
            compress: {
                'keep_fnames': true,
                'screw_ie8': true,
                'warnings': false,
            },
            mangle: {
                'keep_fnames': true,
                'screw_ie8': true,
            },
        } )
    ]
};
