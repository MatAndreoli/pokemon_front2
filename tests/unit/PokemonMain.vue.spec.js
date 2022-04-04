import PokemonMain from '../../src/components/PokemonMain.vue';
import { shallowMount } from '@vue/test-utils';

describe('PokemonMain', () => {
  it('PokemonMain component should exist', () => {
    expect(PokemonMain.name).toBe('PokemonMain');
  });
});
