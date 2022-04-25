const pokemon_api_uc = require('../../../usecases/pokemon_api_uc');

exports.get = async (req, res) => {
  const data = await pokemon_api_uc.getPokemonList(req.params.limit);
  res.send(data);
};
