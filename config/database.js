// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pathlab', 'root', '261099', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
