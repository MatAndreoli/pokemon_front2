const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.listen(3000, (err) => {
  if (err) console.log(`Something went wrong: ${err}`);
  console.log(`Server is running on PORT:3000`);
});
