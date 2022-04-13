const pokemon_api = require('../../client/pokemon_api');
const pokemonController = require('./pokemon-controller');

jest.mock('../../client/pokemon_api', () => ({
  getPokemonList: jest.fn(() => ['fda', 'fda']),
}));

const req = jest.fn();
const res = { send: jest.fn() };

describe('pokemon-controller ', () => {
  describe('when method GET from the pokemon-controller is called', () => {
    beforeEach(async () => {
      await pokemonController.get(req, res);
    });

    it('should call pokemon_api.getPokemonList', async () => {
      expect(pokemon_api.getPokemonList).toHaveBeenCalled();
    });

    it("should call res.send(['fda', 'fda'])", async () => {
      expect(res.send).toHaveBeenCalledWith(['fda', 'fda']);
    });
  });
});
