const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./models');
const personRoutes = require('./routes/personRoutes');

app.use(express.json());
app.use('/api', personRoutes);


const PORT = 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

module.exports = app;
