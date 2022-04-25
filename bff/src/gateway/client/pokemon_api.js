const http = require('./axios-export');

const pokemon = {
  getPokemonList: async (limit) => {
    const { data } = await http.get("/" + ((limit >= 0 && limit != undefined) ? limit : 0));
    return data;
  },
};

module.exports = pokemon;
