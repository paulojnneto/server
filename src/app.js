const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
app.use(cors());
//Rotas
const index = require('./routes/index.js');
const baseRoute = require('./routes/baseRoute');
app.use('/', index);
app.use('/routes', baseRoute);
module.exports = app;