import http from '../http/index';

const pokemon = {
  getPokemonList: async (limit) => {
    const { data } = await http.get(`/${limit}`);
    return data;
  },
};

export default pokemon;
