const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('doctor', {
    doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true     // Automatically increments the customer_id
    },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact_no_business: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact_no_personal: {
        type: DataTypes.STRING, // Assuming contact_no_personal is also a string
        allowNull: false
      },
      email_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
      degree:{
        type: DataTypes.STRING,
        allowNull: false
      },
     
    //   createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW // Set default value to current timestamp
    // }
})
module.exports = Doctor;