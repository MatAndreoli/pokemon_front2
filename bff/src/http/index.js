const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:8080/pokemons/',
});

module.exports = http;
