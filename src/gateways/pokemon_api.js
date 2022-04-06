import http from '../http/index';

const pokemon = {
  getPokemonList: async () => {
    const { data } = await http.get(`http://localhost:8080/pokemons/`);
    return data;
  },
};

export default pokemon;
