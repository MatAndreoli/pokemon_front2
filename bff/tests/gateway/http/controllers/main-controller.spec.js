const mainController = require('../../../../src/gateway/http/controllers/main-controller');
const assetsBuild = require('../../../../src/gateway/http/builders/assets-builder');

jest.mock('../../../../src/gateway/http/builders/assets-builder', () => ({
  buildAssets: jest.fn(() => ({ css: ['apple'], js: ['banana', 'some'] })),
}));

describe('main-controller', () => {
  const req = jest.fn();
  const res = {
    render: jest.fn(),
    redirect: jest.fn(),
  };

  describe('when method GET from the controller is called', () => {
    beforeEach(() => {
      mainController.get(req, res);
    });

    it('should call method assetsBuild.buildAssets', () => {
      expect(assetsBuild.buildAssets).toHaveBeenCalled();
    });

    it('should call method res.render with expected params', () => {
      expect(res.render).toHaveBeenCalledWith('index', {
        css: ['apple'],
        js: ['banana', 'some'],
      });
    });
  });

  describe('when method redirectTo from the controller is called', () => {
    beforeEach(() => {
      mainController.redirectTo(req, res);
    });

    it('should call method redirect', () => {
      expect(res.redirect).toHaveBeenCalledWith('/0');
    });
  });
});
