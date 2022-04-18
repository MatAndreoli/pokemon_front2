const assetsBuilder = require('../builders/assets-builder');

exports.get = (_req, res) => {
  res.render('index', assetsBuilder.buildAssets());
};
