import PokemonMain from '../../src/components/PokemonMain.vue';

describe('PokemonMain', () => {
  it('should validate name', () => {
    expect(PokemonMain.name).toBe('PokemonMain');
  });
});
