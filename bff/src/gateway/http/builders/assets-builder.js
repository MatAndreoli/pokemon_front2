const assets = require('../../../assets.json');

const assetsBuild = {
  css: [],
  js: [],
};

exports.buildAssets = () => {
  Object.keys(assets).forEach((prop) => {
    if (assets[prop].css) {
      assetsBuild.css.push(assets[prop].css);
    }
    if (assets[prop].js) {
      assetsBuild.js.push(assets[prop].js);
    }
  });
  return assetsBuild;
};
