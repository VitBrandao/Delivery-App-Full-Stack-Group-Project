const express = require('express');
const cors = require('cors');

const loginRoutes = require('../routes/loginRoutes');
const saleRoutes = require('../routes/salesRoutes');
const saleProductRoutes = require('../routes/salesProductsRoutes');
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

app.use('/', saleRoutes);

app.use('/', saleProductRoutes);

module.exports = app;
