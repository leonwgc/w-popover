/* eslint-disable @typescript-eslint/no-var-requires */
const { default: pack } = require('packw');
const argv = require('yargs').argv;
const path = require('path');

const isBuild = !!argv.build;

pack(!isBuild, {
  entry: {
    index: `./demo/index`,
  },
  output: {
    path: path.resolve(__dirname, !isBuild ? '.dev' : 'docs'),
    publicPath: '',
  },
  devServer: {
    port: 9101,
  },
  resolve: {
    alias: {
      'w-popover': path.resolve(__dirname, './src'),
    },
  },
});
