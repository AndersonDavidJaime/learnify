// learnify-backend/models/Enrollment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./Course');

const Enrollment = sequelize.define('Enrollment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    progress: {
        type: DataTypes.INTEGER, // Progreso del usuario en el curso
        defaultValue: 0,
    },
    completionStatus: {
        type: DataTypes.BOOLEAN, // Si el curso está completado
        defaultValue: false,
    }
});

// Asociación: Un Usuario puede estar inscrito en muchos Cursos
User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });

module.exports = Enrollment;
