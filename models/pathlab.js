const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pathlab = sequelize.define('pathlab', {
  path_lab_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true     // Automatically increments the customer_id
    },
    path_lab_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      license_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      GST_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      doctor_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      icon_data: {
          type: DataTypes.BLOB('long'),
          allowNull: false
      },
      registration_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
      renewal_date: {
        type: DataTypes.DATE,
        allowNull: true, // or false if it cannot be null
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW // Set default value to current timestamp
    // }
})
module.exports = Pathlab;
