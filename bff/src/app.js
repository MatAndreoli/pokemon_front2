const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static('../public'))

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', '../views');

const indexRoute = require('./routes/index')
app.use('/', indexRoute)

app.listen(3000);
