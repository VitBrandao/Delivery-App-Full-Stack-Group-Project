const express = require('express');
const cors = require('cors');

const loginRoutes = require('../routes/loginRoutes');
const registerRoutes = require('../routes/registerRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', loginRoutes);
app.use('/', registerRoutes);

module.exports = app;