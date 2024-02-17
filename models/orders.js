const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orders = sequelize.define('orders', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    order_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    path_lab_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    net_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    gross_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    prescription_image: {
        type: DataTypes.BLOB,
        allowNull: true // Assuming prescription image is optional
    }
})
module.exports = Orders;