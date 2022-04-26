import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  list: [],
  detail: {},
  limit: 0
};

const getters = {
  getList: (_state) => _state.list,
  getDetail: (_state) => _state.detail,
  getLimit: (_state) => _state.limit,
};

const mutations = {
  ADD_TO_LIST(_state, payload) {
    _state.list = payload;
  },
  ADD_TO_DETAIL(_state, payload) {
    const pokemonDetail = _state.list.find((pokemon) => payload == pokemon.id);
    if (pokemonDetail) {
      _state.detail = pokemonDetail;
    }
  },
  ADD_LIMIT(_state, payload) {
    _state.limit = payload;
  },
};

const actions = {
  setPokemonList({ commit }, payload) {
    commit('ADD_TO_LIST', payload);
  },
  setDetail({ commit }, payload) {
    commit('ADD_TO_DETAIL', payload);
  },
  setLimit({ commit }, payload) {
    commit('ADD_LIMIT', payload);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
