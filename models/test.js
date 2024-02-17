const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Test = sequelize.define('test', {
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true     // Automatically increments the customer_id
    },
    test_name  : {
        type: DataTypes.STRING,
        allowNull: false
      },
      test_duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
    //   created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW // Set default value to current timestamp
    // }
})
module.exports = Test;