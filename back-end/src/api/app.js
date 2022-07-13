const express = require('express');
const cors = require('cors');

const loginRoutes = require('../routes/loginRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', loginRoutes);

module.exports = app;