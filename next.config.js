const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

require('dotenv').config({
  path: isDev ? '.env' : '.env.production'
});

module.exports = {
  distDir: '../.build',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ]),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&outputPath=static/',
      },
      {
        test: /\.(svg|ttf|eot)$/i,
        loader: 'file-loader?outputPath=static/',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: [
          'file-loader?outputPath=static/',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    );

    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(
      new ExtractTextPlugin({
        filename: path.join('static', 'app.min.css'),
      }),
      new webpack.DefinePlugin(env)
    );
    return config;
  },
};
