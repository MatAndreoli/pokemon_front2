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

const indexRoute = require('./routes/index');
const pokemonRoute = require('./routes/pokemon');

app.use('/', indexRoute);
app.use('/pokemons', cors(), pokemonRoute);

app.listen(3000);
