const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './temp/db.sqlite',
});

module.exports = sequelize;