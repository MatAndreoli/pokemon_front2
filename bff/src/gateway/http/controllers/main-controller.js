const assetsBuilder = require('../builders/assets-builder');

exports.get = (_req, res) => {
  res.render('index', assetsBuilder.buildAssets());
};

exports.redirectTo = (_req, res) => {
  res.redirect('/0');
};
