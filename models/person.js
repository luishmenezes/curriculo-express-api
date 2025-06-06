module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Person', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        bio: DataTypes.TEXT
    });
};
