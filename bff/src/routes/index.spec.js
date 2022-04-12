const index = require('../controllers/index-controller');
let assets = require('../assets.json');

jest.mock('../assets.json', () => ({
  app: {
    css: 'maçã',
    js: 'banana',
  },
  'chunk-vendors': { js: 'some' },
  '': { ico: 'icon', html: 'index.html' },
}));

describe('App', () => {
  const req = jest.fn();
  const res = {
    render: jest.fn(),
  };
  const css = [];
  const js = [];

  beforeEach(() => {
    for (let prop in assets) {
      if (assets[prop].css) {
        css.push(assets[prop].css);
      }
      if (assets[prop].js) {
        js.push(assets[prop].js);
      }
    }
  });
  it(
    'when method GET from the controller is called ' +
      "should call res.render('index', { css, js })",
    async () => {
      index.get(req, res);
      expect(res.render).toHaveBeenCalledWith('index', { css, js });
    }
  );
});
