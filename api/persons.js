const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();

const db = require('../models');
const personRoutes = require('../routes/personRoutes');

const app = express();
app.use(express.json());
app.use('/api', personRoutes);

module.exports = serverless(app);
