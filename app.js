const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => { res.render('index') });

app.listen(port, () => console.log(`Project Alpha listening on port ${port}!`))