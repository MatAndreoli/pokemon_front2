const http = require('./axios-export');

const pokemon = {
  getPokemonList: async () => {
    const { data } = await http.get(`http://localhost:8080/pokemons/`);
    return data;
  },
};

module.exports = pokemon;
