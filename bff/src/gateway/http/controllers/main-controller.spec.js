const indexController = require('./main-controller');

jest.mock('../../../assets.json', () => ({
  app: {
    css: 'apple',
    js: 'banana',
  },
  'chunk-vendors': { js: 'some' },
  '': { ico: 'icon', html: 'index.html' },
}));

describe('index-controller', () => {
  const req = jest.fn();
  const res = {
    render: jest.fn(),
  };
  it(
    'when method GET from the controller is called ' +
      'should call method res.render',
    async () => {
      indexController.get(req, res);
      expect(res.render).toHaveBeenCalledWith("index", {"css": ["apple"], "js": ["banana", "some"]});
    }
  );
});
