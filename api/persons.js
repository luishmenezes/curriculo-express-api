const express = require('express');
const serverless = require('serverless-http');
const personRoutes = require('../routes/personRoutes');

const app = express();
app.use(express.json());

// Monta as rotas em /api
app.use('/api', personRoutes);

module.exports = app;
module.exports.handler = serverless(app);
