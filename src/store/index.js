import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    detail: {},
  },
  getters: {
    getList(state) {
      return state.list;
    },
    getDetail(state) {
      return state.detail;
    },
  },
  mutations: {
    ADD_TO_LIST(state, payload) {
      state.list = payload;
    },
    ADD_TO_DETAIL(state, payload) {
      const pokemonDetail = state.list.find((pokemon) => payload == pokemon.id);
      if (pokemonDetail) {
        state.detail = pokemonDetail;
      }
    },
  },
  actions: {
    async getPokemonList(context) {
      axios.get(`http://localhost:8080/pokemons/`).then((res) => {
        context.commit('ADD_TO_LIST', res.data);
      });
    },
  },
})
