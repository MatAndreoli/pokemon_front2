import PokemonItem from '../../src/components/PokemonItem.vue';
import { shallowMount } from '@vue/test-utils';

const factory = (propsData) =>
  shallowMount(PokemonItem, {
    propsData: {
      ...propsData,
    },
  });

describe('PokemonItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = factory({ img: 'url', name: 'matheus' });
  });

  it('should validate name', () => {
    expect(PokemonItem.name).toEqual('PokemonItem');
  });

  it('should have the value of prop name in the <h2></h2>', () => {
    const h2Text = wrapper.find('h2').element.textContent;
    expect(h2Text).toContain('Matheus');
  });

  describe('when the card is clicked', () => {
    beforeEach(() => {
      wrapper.find('.cards').trigger('click');
    });

    it('then should emit pokemonEvent with an empty value', () => {
      expect(wrapper.emitted('pokemonEvent')).toEqual([[]]);
    });
  });
});
