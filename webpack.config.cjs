const path = require('path'),
webpack = require('webpack'),
jsDoc = '/** @type {import("../index.d.ts")} */';

module.exports = [
  {
    mode: 'development',
    devtool: 'source-map',
    entry: './dist/index.js',
    output: {
      filename: 'index.mjs',
      path: path.resolve(__dirname, 'dist/esm'),
      library: { type: 'module' }
    },
    experiments: { outputModule: true }
  }, {
    mode: 'development',
    devtool: 'source-map',
    entry: './dist/js-util.js',
    output: {
      filename: 'js-util.mjs',
      path: path.resolve(__dirname, 'dist/esm'),
      library: { type: 'module' }
    },
    experiments: { outputModule: true }
  }, {
    mode: 'development',
    devtool: 'source-map',
    entry: './dist/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/js'),
      library: {
        name: 'simpleValidation',
        type: 'var'
      }
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: jsDoc,
        raw: true,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
      })
    ]
  }, {
    mode: 'production',
    entry: './dist/index.js',
    output: {
      filename: 'index.min.mjs',
      path: path.resolve(__dirname, 'dist/esm'),
      library: { type: 'module' }
    },
    experiments: { outputModule: true }
  }, {
    mode: 'production',
    entry: './dist/js-util.js',
    output: {
      filename: 'js-util.min.mjs',
      path: path.resolve(__dirname, 'dist/esm'),
      library: { type: 'module' }
    },
    experiments: { outputModule: true }
  }, {
    mode: 'production',
    entry: './dist/index.js',
    output: {
      filename: 'index.min.js',
      path: path.resolve(__dirname, 'dist/js'),
      library: {
        name: 'simpleValidation',
        type: 'var'
      }
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: jsDoc,
        raw: true,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
      })
    ]
  }
];