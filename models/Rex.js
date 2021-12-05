const Sequelize = require('sequelize');
const db = require('../config/db');

const Rex = db.define("rex", {
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
    sn: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Rex;