const pokemon_api_uc = require('../../../usecases/pokemon_api_uc')

exports.get = async (_req, res) => {
  const data = await pokemon_api_uc.getPokemonList();
  res.send(data);
};
