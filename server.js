require('dotenv').config(path: './.env');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(port, () => console.log(`Alpha app listening on port ${port}!`))