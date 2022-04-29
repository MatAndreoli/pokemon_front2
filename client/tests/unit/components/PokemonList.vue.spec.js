import PokemonList from '@/components/PokemonList.vue';
import PokemonItem from '@/components/PokemonItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import pokemon from '@/gateways/pokemon_api';

jest.mock('@/gateways/pokemon_api', () => ({
  getPokemonList: jest.fn(),
}));

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
      $route: {
        params: { limit: 1 },
      },
    },
  });

const getListWithData = () => [
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
];

const getListEmpty = () => [];

const actions = {
  setPokemonList: jest.fn(),
  setDetail: jest.fn(),
  setLimit: jest.fn(() => 1),
};

const store = (option) =>
  new Vuex.Store({
    getters: {
      getList: option ? getListEmpty : getListWithData,
      getLimit: jest.fn(() => 1),
    },
    actions,
  });

describe('PokemonList', () => {
  let wrapper;

  describe('given that the component is started', () => {
    beforeEach(() => {
      wrapper = factory(store, localVue);
    });

    it('then should validate name', () => {
      expect(PokemonList.name).toEqual('PokemonList');
    });

    it('then should validate if child component exists', () => {
      expect(wrapper.getComponent(PokemonItem)).toBeTruthy();
    });

    describe('when method goToDetail is called', () => {
      beforeEach(() => {
        wrapper = factory(store, localVue);
        wrapper.vm.goToDetail(1);
      });

      it('then should call setDetail with the expected param', () => {
        expect(actions.setDetail.mock.calls[0][1]).toEqual(1);
      });

      it('then should call $router.push with the expected param', () => {
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
          name: 'detailView',
          params: { id: 1 },
        });
      });
    });

    describe('when method created is called', () => {
      beforeEach(() => {
        pokemon.getPokemonList = jest.fn(() => []);
      });

      describe('and getList has data', () => {
        beforeEach(() => {
          wrapper = factory(store, localVue);
        });

        it('then should not call getPokemonList', () => {
          expect(pokemon.getPokemonList).not.toHaveBeenCalled();
        });

        it('then should not call setPokemonList', () => {
          expect(actions.setPokemonList).not.toHaveBeenCalled();
        });
      });

      describe('and getList is empty', () => {
        beforeEach(() => {
          wrapper = factory(store(true), localVue);
        });

        it('then should call setLimit', () => {
          expect(actions.setLimit.mock.calls[0][1]).toEqual(1);
        });

        it('then should call getPokemonList', () => {
          expect(pokemon.getPokemonList).toHaveBeenCalledWith(1);
        });

        it('then should call setPokemonList with the expected param', () => {
          expect(actions.setPokemonList.mock.calls[0][1]).toEqual([]);
        });
      });
    });
  });
});
