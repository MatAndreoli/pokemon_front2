const pokemon = require('./pokemon_api');
const http = require('../http/index');

jest.mock('../http/index', () => ({
  get: jest.fn(() => ({
    data: ['fda', 'fda'],
  })),
}));

describe('pokemon_api', () => {
  describe('when method getPokemonList() is called', () => {
    beforeEach(async () => {
      await pokemon.getPokemonList();
    });

    it('then should call http.get', () => {
      expect(http.get).toHaveBeenCalled();
    });

    it('then should return an object', () => {
      expect(http.get).toHaveReturnedWith({
        data: ['fda', 'fda'],
      });
    });
  });
});
