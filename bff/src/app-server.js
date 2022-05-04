require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const mustacheExpress = require('mustache-express');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static('../public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', '../views');

const indexRoute = require('./gateway/http/routes/main-router');
const pokemonRoute = require('./gateway/http/routes/pokemon-router');

app.use('/', indexRoute);
app.use('/pokemons', cors(), pokemonRoute);

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Server running on ${process.env.LOCAL}:${process.env.SERVER_PORT}`)
});
