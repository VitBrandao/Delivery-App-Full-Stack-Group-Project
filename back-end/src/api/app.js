const express = require('express');
const cors = require('cors');

const loginRoutes = require('../routes/loginRoutes');
const registerRoutes = require('../routes/registerRoutes');
const productsRoutes = require('../routes/productsRoutes');
const salesRoutes = require('../routes/salesRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', loginRoutes);
app.use('/', registerRoutes);
app.use('/', productsRoutes);
app.use('/', salesRoutes);

module.exports = app;