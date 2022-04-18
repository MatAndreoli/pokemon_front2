const assetsBuild = require('./assets-builder');

jest.mock('../../../assets.json', () => ({
  app: {
    css: 'apple',
    js: 'banana',
  },
  'chunk-vendors': { js: 'some' },
  '': { ico: 'icon', html: 'index.html' },
}));

describe('assets-builder', () => {
  it('when method buildAssets is called should return an object with two arrays: { css, js }', () => {
    const result = assetsBuild.buildAssets();
    expect(result).toEqual({
      css: ['apple'],
      js: ['banana', 'some'],
    });
  });
});
