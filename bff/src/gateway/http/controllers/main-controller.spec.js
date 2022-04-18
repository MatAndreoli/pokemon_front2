const mainController = require('./main-controller');
const assetsBuild = require('../builders/assets-builder');

jest.mock('../builders/assets-builder.js', () => ({
  buildAssets: jest.fn(() => ({ css: ['apple'], js: ['banana', 'some'] })),
}));

describe('main-controller', () => {
  beforeEach(() => {
    mainController.get(req, res);
  });
  const req = jest.fn();
  const res = {
    render: jest.fn(),
  };
  it(
    'when method GET from the controller is called ' +
      'should call method assetsBuild.buildAssets',
    () => {
      expect(assetsBuild.buildAssets).toHaveBeenCalled();
    }
  );
  
  it(
    'when method GET from the controller is called ' +
      'should call method res.render',
    () => {
      expect(res.render).toHaveBeenCalledWith('index', {
        css: ['apple'],
        js: ['banana', 'some'],
      });
    }
  );
});
