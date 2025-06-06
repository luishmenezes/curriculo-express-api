module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Education', {
        title: DataTypes.STRING,
        institution: DataTypes.STRING,
        year: DataTypes.INTEGER
    });
};
