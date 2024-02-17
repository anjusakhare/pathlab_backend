const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TestCharge = sequelize.define('path_lab_test_charges', {
    path_lab_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    test_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    test_fees: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    app_percentage: {
        type: DataTypes.DECIMAL,
        allowNull: true
        // allowNull:false
    },
    discount_percentage: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    estimated_duration: {
        type: DataTypes.TIME,
        allowNull: false
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW // Set default value to current timestamp
    // }
})
module.exports = TestCharge;
