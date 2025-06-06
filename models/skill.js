module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Skill', {
        name: DataTypes.STRING
    });
};
