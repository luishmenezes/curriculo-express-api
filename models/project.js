module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Project', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};
