const pokemon_api = require('../gateway/client/pokemon_api');

const pokemon_api_uc = {
  getPokemonList: async () => {
    const data = await pokemon_api.getPokemonList();
    return data;
  },
};

module.exports = pokemon_api_uc;
