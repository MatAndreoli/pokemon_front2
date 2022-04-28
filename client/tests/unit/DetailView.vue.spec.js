import DetailView from '../../src/views/DetailView.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import pokemon from '@/gateways/pokemon_api';

jest.mock('@/gateways/pokemon_api', () => ({
  getPokemonList: jest.fn(() => []),
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

const getDetailWithData = () => ({
  abilities: ['overgrow', 'chlorophyll'],
  front_default:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  id: 1,
  name: 'bulbasaur',
  types: ['grass', 'poison'],
});

const getDetailEmpty = () => {};

const actions = { setPokemonList: jest.fn(), setDetail: jest.fn() };

const store = (getList=false, getDetail=false) =>
  new Vuex.Store({
    getters: {
      getList: getList ? getListEmpty : getListWithData,
      getDetail: getDetail ? getDetailEmpty : getDetailWithData,
      getLimit: jest.fn(() => 1),
    },
    actions,
  });

describe('DetailView', () => {
  let wrapper;

  describe('when component is rendered', () => {
    describe('and getDetail is empty', () => {
      beforeEach(() => {
        wrapper = factory(store(false, true), localVue);
      });
      it('then should not render .card', () => {
        const card = wrapper.find('.card').element;
        expect(card).not.toBeTruthy();
      });
    });

    describe('and getDetail is not empty', () => {
      beforeEach(() => {
        wrapper = factory(store(false, false), localVue);
      });
      it('then should render .card', () => {
        const card = wrapper.find('.card').element;
        expect(card).toBeTruthy();
      });
    });
  });

  describe('when method created is called', () => {
    beforeEach(() => {
      pokemon.getPokemonList = jest.fn(() => []);
    });

    describe('and getList has data', () => {
      beforeEach(() => {
        wrapper = factory(store(false), localVue);
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
      });

      it('then should call method camelCase', () => {
        let camelCaseStr = wrapper.vm.camelCase('text');
        expect(camelCaseStr).toEqual('Text');
      });

      it('then should not call getPokemonList', () => {
        expect(pokemon.getPokemonList).not.toHaveBeenCalled();
      });

      it('then should not call setPokemonList', () => {
        expect(actions.setPokemonList).not.toHaveBeenCalled();
      });

      it('then should not call setTimeout', () => {
        expect(setTimeout).not.toHaveBeenCalled();
      });
    });

    describe('and getList has no data', () => {
      beforeEach(() => {
        wrapper = factory(store(true), localVue);
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
      });

      it('then should call getPokemonList', () => {
        expect(pokemon.getPokemonList).toHaveBeenCalled();
      });

      it('then should call setPokemonList with expected param', () => {
        expect(actions.setPokemonList.mock.calls[0][1]).toEqual([]);
      });

      it('then should call setTimeout with body and time', () => {
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
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
        name: 'home',
        params: { limit: 1 },
      });
    });
  });
});
