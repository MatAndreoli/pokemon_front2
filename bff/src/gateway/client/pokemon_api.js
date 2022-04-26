const http = require('./axios-export');

const pokemon = {
  getPokemonList: async (limit) => {
    const validLimit = (limit >= 0) ? limit : 0;
    const { data } = await http.get("/" + validLimit);
    return data;
  },
};

module.exports = pokemon;
