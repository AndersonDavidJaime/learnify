// learnify-backend/models/Material.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Material = sequelize.define('Material', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT, // Puede ser texto o un enlace a un archivo/video
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'text', // Tipo de material (texto, video, enlace)
    }
});

// Asociación: Un Curso tiene muchos Materiales
Course.hasMany(Material, { foreignKey: 'courseId', onDelete: 'CASCADE' });
Material.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Material;
