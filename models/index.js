const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Necessário para Render e outros hosts cloud
        },
    },
    dialectModule: require("pg"),
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Person = require('./person')(sequelize, Sequelize);
db.Education = require('./education')(sequelize, Sequelize);
db.Experience = require('./experience')(sequelize, Sequelize);
db.Project = require('./project')(sequelize, Sequelize);
db.Skill = require('./skill')(sequelize, Sequelize);

// Relacionamentos
db.Person.hasMany(db.Education);
db.Person.hasMany(db.Experience);
db.Person.hasMany(db.Project);
db.Person.hasMany(db.Skill);

db.Education.belongsTo(db.Person);
db.Experience.belongsTo(db.Person);
db.Project.belongsTo(db.Person);
db.Skill.belongsTo(db.Person);

module.exports = db;
