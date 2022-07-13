const express = require('express');
const cors = require('cors');

const loginRoutes = require('../routes/loginRoutes');
const saleRoutes = require('../routes/salesRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', loginRoutes);

app.use('/', saleRoutes);

module.exports = app;
