const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Asegúrate de que el modelo Course está importado

// Crear un curso
router.post('/', async (req, res) => {
    try {
        const { title, description, duration } = req.body;
        const course = await Course.create({ title, description, duration });
        res.status(201).json(course); // Devuelve el curso creado
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el curso' });
    }
});

// Obtener todos los cursos
router.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll(); // Encuentra todos los cursos
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los cursos' });
    }
});

module.exports = router;
