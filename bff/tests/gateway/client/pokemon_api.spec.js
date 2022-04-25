const pokemon = require('../../../src/gateway/client/pokemon_api');
const http = require('../../../src/gateway/client/axios-export');

jest.mock('../../../src/gateway/client/axios-export', () => ({
  get: jest.fn(() => ({
    data: ['fda', 'fda'],
    other: 'informations',
    this: ['should', 'not', 'be', 'caught', 'by', 'the', 'variable', '"data"'],
  })),
}));

describe('pokemon_api', () => {
  let apiResult;
  describe('when method getPokemonList(valid) is called', () => {
    beforeAll(async () => {
      apiResult = await pokemon.getPokemonList(1);
    });

    it('then http.get should have been called with expected params', () => {
      expect(http.get).toHaveBeenCalledWith("/1");
    });

    it('then http.get should return an object with a lot of properties', () => {
      expect(http.get).toHaveReturnedWith({
        data: ['fda', 'fda'],
        other: 'informations',
        this: [
          'should',
          'not',
          'be',
          'caught',
          'by',
          'the',
          'variable',
          '"data"',
        ],
      });
    });

    it('then should just return what is in property data', () => {
      expect(apiResult).toEqual(['fda', 'fda']);
    });
  });

  describe('when method getPokemonList(invalid) is called', () => {
    beforeEach(async () => {
      apiResult = await pokemon.getPokemonList("fdaf");
    });

    it('then http.get should have been called with "/0"', () => {
      expect(http.get).toHaveBeenCalledWith("/0");
    });
  });
});
