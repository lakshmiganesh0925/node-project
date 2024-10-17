const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Address = sequelize.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

User.hasMany(Address); // A User can have many addresses
Address.belongsTo(User); // Each address belongs to a User

module.exports = Address;
