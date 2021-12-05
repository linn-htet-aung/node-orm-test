const Sequelize = require('sequelize');
const db = require('../config/db');

const Digital = db.define("digital", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Digital;