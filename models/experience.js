module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Experience', {
        title: DataTypes.STRING,
        company: DataTypes.STRING,
        period: DataTypes.STRING
    });
};
