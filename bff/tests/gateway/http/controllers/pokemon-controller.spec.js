const pokemonController = require('../../../../src/gateway/http/controllers/pokemon-controller.js');
const pokemon_api_uc = require('../../../../src/usecases/pokemon_api_uc.js');

jest.mock('../../../../src/usecases/pokemon_api_uc.js', () => ({
  getPokemonList: jest.fn(() => ['fda', 'fda']),
}));

const req = {
  params: {
    limit: 1
  }
};
const res = { send: jest.fn() };

describe('pokemon-controller ', () => {
  describe('when method GET from the pokemon-controller is called', () => {
    beforeEach(async () => {
      await pokemonController.get(req, res);
    });

    it('should call usecase pokemon_api_uc.getPokemonList with expected params', async () => {
      expect(pokemon_api_uc.getPokemonList).toHaveBeenCalledWith(1);
    });

    it('should call usecase pokemon_api_uc.getPokemonList', async () => {
      expect(pokemon_api_uc.getPokemonList).toHaveReturnedWith(['fda', 'fda']);
    });

    it("should call res.send with expected params", async () => {
      expect(res.send).toHaveBeenCalledWith(['fda', 'fda']);
    });
  });
});
