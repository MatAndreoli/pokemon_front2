import pokemon from '@/gateways/pokemon_api';
import http from '@/http/index';

jest.mock('@/http/index', () => ({
  get: jest.fn(() => []),
}));

describe('pokemon_api', () => {
  describe('when method getPokemonList is called', () => {
    beforeEach(() => {
      pokemon.getPokemonList(1);
    });

    it('then should call http.get with expected params', () => {
      expect(http.get).toHaveBeenCalledWith('http://localhost:3000/pokemons/1');
    });
  });
});
