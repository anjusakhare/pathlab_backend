const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderDetail = sequelize.define('order_details', {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
});

module.exports = OrderDetail;