import PokemonMain from '@/components/PokemonMain.vue';
import PokemonList from '@/components/PokemonList.vue';
import { shallowMount } from '@vue/test-utils';

describe('PokemonMain', () => {
  let wrapper;

  describe('given that the component is started', () => {
    beforeEach(() => {
      wrapper = shallowMount(PokemonMain);
    });

    it('then should validate name', () => {
      expect(PokemonMain.name).toBe('PokemonMain');
    });

    it('then should validate if child component exists', () => {
      expect(wrapper.getComponent(PokemonList)).toBeTruthy();
    });
  });
});
