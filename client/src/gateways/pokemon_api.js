import http from '../http/index';

const pokemon = {
  getPokemonList: async (limit) => {
    const { data } = await http.get(`http://localhost:3000/pokemons/${limit}`);
    return data;
  },
};

export default pokemon;
