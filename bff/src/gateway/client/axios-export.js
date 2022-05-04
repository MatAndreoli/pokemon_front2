require('dotenv').config()
const axios = require('axios');

const ADDRESS = process.env.NODE_ENV == 'prod' ? process.env.API_IP : process.env.LOCAL

const http = axios.create({
  baseURL: `http://${ADDRESS}:8080/pokemons/`,
});

module.exports = http;
