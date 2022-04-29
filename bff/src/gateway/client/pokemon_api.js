const http = require('./axios-export');

const pokemon = {
  getPokemonList: async (limit) => {
    const validLimit = limit >= 1 ? limit : 0;
    const { data } = await http.get('/' + validLimit);
    return data;
  },
};

module.exports = pokemon;
