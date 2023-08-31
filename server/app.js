const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.json({extendedUrl: true}))

app.use('/', apiRoutes);

module.exports = app;
