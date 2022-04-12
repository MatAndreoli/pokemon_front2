const assets = require('../assets.json');

exports.get = (req, res) => {
  const css = [];
  const js = [];
  for (let prop in assets) {
    if (assets[prop].css) {
      css.push(assets[prop].css);
    }
    if (assets[prop].js) {
      js.push(assets[prop].js);
    }
  }
  res.render('index', { css, js });
};
