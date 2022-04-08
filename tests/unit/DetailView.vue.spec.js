import DetailView from '../../src/views/DetailView.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import pokemon from '@/gateways/pokemon_api';

jest.mock('@/gateways/pokemon_api', () => ({
  getPokemonList: jest.fn(),
}));

const localVue = createLocalVue();
localVue.use(Vuex);

const factory = (store, localVue) =>
  shallowMount(DetailView, {
    store,
    localVue,
    mocks: {
      $router: {
        push: jest.fn(),
      },
    },
  });

const gettersWithData = () => [
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

const gettersEmpty = () => [];

const actions = { setPokemonList: jest.fn(), setDetail: jest.fn() };

const store = (option) =>
  new Vuex.Store({
    getters: {
      getList: option ? gettersEmpty : gettersWithData,
      getDetail: jest.fn(),
    },
    actions,
  });

describe('DetailView', () => {
  let wrapper;

  describe('when method created is called', () => {
    beforeEach(() => {
      pokemon.getPokemonList = jest.fn(() => []);
    });

    describe('and getList has data', () => {
      beforeEach(() => {
        wrapper = factory(store, localVue);
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
      });

      it('then should not call getPokemonList', () => {
        expect(pokemon.getPokemonList).not.toHaveBeenCalled();
      });

      it('then should not call setPokemonList', () => {
        expect(actions.setPokemonList).not.toHaveBeenCalled();
      });

      it('then should not call setTimeout', async () => {
        expect(setTimeout).not.toHaveBeenCalled();
      });
    });

    describe('and getList has no data', () => {
      beforeEach(async () => {
        wrapper = factory(store(true), localVue);
      });

      it('then should call getPokemonList', () => {
        expect(pokemon.getPokemonList).toHaveBeenCalled();
      });

      it('then should call setPokemonList with expected param', () => {
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000);
        expect(actions.setPokemonList.mock.calls[0][1]).toEqual([]);
      });

      it('then should call setTimeout with body and time', async () => {
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000);
      });
    });
  });

  describe('when method goToHome is called', () => {
    beforeEach(() => {
      wrapper = factory(store, localVue);
      wrapper.vm.goToHome();
    });

    it('then should call $router.push with expected param', () => {
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'home' });
    });
  });
});
