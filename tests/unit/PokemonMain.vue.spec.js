import PokemonMain from '../../src/components/PokemonMain.vue';
import { shallowMount } from '@vue/test-utils';

describe('PokemonMain', () => {
  it('PokemonMain component should exist', () => {
    const wrapper = shallowMount(PokemonMain);
    expect(wrapper).toBeTruthy();
  });
});
