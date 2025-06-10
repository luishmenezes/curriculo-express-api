const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./models'); // Importa os models do Sequelize
const personRoutes = require('./routes/personRoutes'); // Suas rotas

app.use(express.json());
app.use('/api', personRoutes); // Ex: /api/person

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

module.exports = app;
