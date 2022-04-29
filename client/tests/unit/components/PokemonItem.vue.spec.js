import PokemonItem from '@/components/PokemonItem.vue';
import { shallowMount } from '@vue/test-utils';

const factory = () =>
  shallowMount(PokemonItem, {
    propsData: {
      img: 'url',
      name: 'matheus',
    },
  });

describe('PokemonItem', () => {
  describe('given that the component is started', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = factory();
    });

    it('then should validate name', () => {
      expect(PokemonItem.name).toEqual('PokemonItem');
    });

    it('then should validate prop img', () => {
      expect(PokemonItem.props.img).toEqual({
        type: String,
        required: true,
      });
    });

    it('then should validate prop name', () => {
      expect(PokemonItem.props.name).toEqual({
        type: String,
        required: true,
      });
    });

    it('then should have the value of prop name in the <h2></h2> already transformed by camelCase method', () => {
      const h2Text = wrapper.find('h2').element.textContent;
      expect(h2Text).toEqual('Matheus');
    });

    describe('when the .cards is clicked', () => {
      beforeEach(() => {
        wrapper.find('.cards').trigger('click');
      });

      it('then should emit pokemonEvent event', () => {
        expect(wrapper.emitted('pokemonEvent')).toEqual([[]]);
      });
    });
  });
});
