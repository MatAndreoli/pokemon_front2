import PokemonList from '../../src/components/PokemonList.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const factory = (store, localVue) =>
  shallowMount(PokemonList, {
    store,
    localVue,
    mocks: {
      $router: {
        push: jest.fn(),
      },
    },
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
};

const gettersEmpty = {
  getList: () => [],
};

const actions = { setPokemonList: jest.fn(), setDetail: jest.fn() };

const store = (option) =>
  new Vuex.Store({
    getters: option ? gettersEmpty : gettersWithData,
    actions,
  });

describe('PokemonList', () => {
  let wrapper;

  describe('when method goToDetail is called', () => {
    beforeEach(() => {
      wrapper = factory(store, localVue);
      wrapper.vm.goToDetail(1);
    });

    it('then should call setDetail', () => {
      expect(actions.setDetail).toHaveBeenCalled();
    });

    it('then should call $router.push', () => {
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
        name: 'detailView',
        params: { id: 1 },
      });
    });
  });

  describe('when method created is called', () => {
    describe('and getList has data', () => {
      beforeEach(() => {
        wrapper = factory(store, localVue);
      });

      it('then should not call setPokemonList', () => {
        expect(actions.setPokemonList).not.toHaveBeenCalled();
      });
    });

    describe('and getList is empty', () => {
      beforeEach(() => {
        wrapper = factory(store(true), localVue);
      });

      it('then should call $store.dispatch', () => {
        expect(actions.setPokemonList).toHaveBeenCalled();
      });
    });
  });
});
