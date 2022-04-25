const pokemon_api = require('../gateway/client/pokemon_api');

const pokemon_api_uc = {
  getPokemonList: async (limit) => {
    return await pokemon_api.getPokemonList(limit);
  },
};

module.exports = pokemon_api_uc;
