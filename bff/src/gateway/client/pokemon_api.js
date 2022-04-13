const http = require('./axios-export');

const pokemon = {
  getPokemonList: async () => {
    const { data } = await http.get();
    return data;
  },
};

module.exports = pokemon;
