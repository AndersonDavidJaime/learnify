// learnify-backend/controllers/courseController.js
const Course = require('../models/Course');

const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear curso', error });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cursos', error });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ message: 'Curso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener curso', error });
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar curso', error });
    }
};

const deleteCourse = async (req, res) => {
    try {
        await Course.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar curso', error });
    }
};

module.exports = { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };
