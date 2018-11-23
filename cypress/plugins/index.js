const wp = require('@cypress/webpack-preprocessor');
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  const options = {
    webpackOptions: require('../webpack.config'),
  };
  on('file:preprocessor', wp(options));
};
