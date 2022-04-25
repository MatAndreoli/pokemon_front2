const pokemon_api_uc = require('../../src/usecases/pokemon_api_uc');
const pokemon_api = require('../../src/gateway/client/pokemon_api');

jest.mock('../../src/gateway/client/pokemon_api', () => ({
  getPokemonList: jest.fn(() => ['fda', 'fda']),
}));

describe('pokemon_api_uc ', () => {
  let ucResult;
  describe('when method getPokemonList from the usecase pokemon_api_uc is called', () => {
    beforeEach(async () => {
      ucResult = await pokemon_api_uc.getPokemonList();
    });

    it('then should call pokemon_api.getPokemonList', async () => {
      expect(pokemon_api.getPokemonList).toHaveReturnedWith(['fda', 'fda']);
    });

    it('then should return an array', async () => {
      expect(ucResult).toEqual(['fda', 'fda']);
    });
  });
});
