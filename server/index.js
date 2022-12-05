const express = require('express');
const cors = require('cors');
const routes = require('./src/Router/Routes');
const PORT = 8080;

const app = express();
app.use(express.json());
const options = {
  origin: '*',
};

app.use(cors(options));

app.use(routes);

app.listen(PORT, ()=>console.log('http://localhost:8080'));
