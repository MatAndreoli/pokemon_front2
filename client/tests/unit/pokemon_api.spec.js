import pokemon from '@/gateways/pokemon_api';
import http from '@/http/index';

jest.mock('@/http/index', () => ({
  get: jest.fn(() => []),
}));

describe('when method getPokemonList() is called', () => {
  beforeEach(async () => {
    await pokemon.getPokemonList();
  });

  it('then should call http.get', () => {
    expect(http.get).toHaveBeenCalled();
  });

});
