import Vue from 'vue';
import Vuex from 'vuex';
import http from '../http/index';

Vue.use(Vuex);

const state = {
  list: [],
  detail: {},
};

const getters = {
  getList: (_state) => _state.list,
  getDetail: (_state) => _state.detail,
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
};

const actions = {
  async setPokemonList({ commit }) {
    http.get(`http://localhost:8080/pokemons/`).then((res) => {
      commit('ADD_TO_LIST', res.data);
    });
  },
  async setDetail({ commit }, payload) {
    commit('ADD_TO_DETAIL', payload);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
