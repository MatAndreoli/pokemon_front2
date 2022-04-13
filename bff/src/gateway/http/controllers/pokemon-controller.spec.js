const pokemonController = require('./pokemon-controller');
const pokemon_api_uc = require('../../../usecases/pokemon_api_uc');

jest.mock('../../../usecases/pokemon_api_uc.js', () => ({
  getPokemonList: jest.fn(() => ['fda', 'fda']),
}));

const req = jest.fn();
const res = { send: jest.fn() };

describe('pokemon-controller ', () => {
  describe('when method GET from the pokemon-controller is called', () => {
    beforeEach(async () => {
      await pokemonController.get(req, res);
    });

    it('should call usecase pokemon_api_uc.getPokemonList', async () => {
      expect(pokemon_api_uc.getPokemonList).toHaveReturnedWith(['fda', 'fda']);
    });

    it("should call res.send(['fda', 'fda'])", async () => {
      expect(res.send).toHaveBeenCalledWith(['fda', 'fda']);
    });
  });
});
