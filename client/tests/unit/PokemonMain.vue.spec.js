import PokemonMain from '../../src/components/PokemonMain.vue';
import { shallowMount } from '@vue/test-utils';

describe('PokemonMain', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonMain);
  });
  it('should validate name', () => {
    expect(PokemonMain.name).toBe('PokemonMain');
  });

  it('should validate if the component was created', () => {
    expect(wrapper).toBeTruthy();
  });
});
