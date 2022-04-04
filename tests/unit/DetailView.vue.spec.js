import DetailView from '../../src/views/DetailView.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const factory = (store, localVue) =>
  shallowMount(DetailView, {
    store,
    localVue,
  });

const gettersWithData = {
  getList: () => [
    {
      abilities: ['overgrow', 'chlorophyll'],
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
    },
    {
      abilities: ['overgrow', 'chlorophyll'],
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      id: 2,
      name: 'ivysaur',
      types: ['grass', 'poison'],
    },
  ],
  getDetail: jest.fn(),
};

const gettersEmpty = {
  getList: () => [],
  getDetail: jest.fn(),
};

const actions = { getPokemonList: jest.fn() };
const store = (option) =>
  new Vuex.Store({
    getters: option ? gettersEmpty : gettersWithData,
    actions,
  });

describe('DetailView', () => {
  let wrapper;
  describe('when method created is called', () => {
    describe('and getList has data', () => {
      beforeEach(() => {
        wrapper = factory(store, localVue);
        wrapper.vm.$store.commit = jest.fn();
      });

      it('then should not call $store.dispatch', () => {
        expect(actions.getPokemonList).not.toHaveBeenCalled();
      });

      it('then should not call $store.commit', () => {
        expect(wrapper.vm.$store.commit).not.toHaveBeenCalled();
      });
    });

    describe('and getList has no data', () => {
      beforeEach(() => {
        wrapper = factory(store(true), localVue);
        wrapper.vm.$store.commit = jest.fn();
      });

      it('then should call $store.dispatch', () => {
        expect(actions.getPokemonList).toHaveBeenCalled();
      });

    });
  });
});
