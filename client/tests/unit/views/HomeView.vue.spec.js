import HomeView from '@/views/HomeView.vue';
import PokemonMain from '@/components/PokemonMain.vue';
import { shallowMount } from '@vue/test-utils';

describe('HomeView', () => {
  let wrapper;

  describe('given that the component is started', () => {
    beforeEach(() => {
      wrapper = shallowMount(HomeView);
    });

    it('then should validate name', () => {
      expect(HomeView.name).toBe('HomeView');
    });

    it('then should validate if child component exists ', () => {
      expect(wrapper.getComponent(PokemonMain)).toBeTruthy();
    });
  });
});
