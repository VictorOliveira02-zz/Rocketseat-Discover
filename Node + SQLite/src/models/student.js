const Sequelize = require('sequelize');
const database = require('../../db.js');

const Student = database.define('student', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
    }
})

module.exports = Student;