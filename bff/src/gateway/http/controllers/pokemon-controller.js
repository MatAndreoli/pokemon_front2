const pokemon = require('../../client/pokemon_api');

exports.get = async (req, res) => {
  const data = await pokemon.getPokemonList('http://localhost:8080/pokemons/');
  res.send(data);
};
