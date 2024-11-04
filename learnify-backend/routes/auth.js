const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rutas de autenticación
router.post('/register', authController.register); // Ruta para registro
router.post('/login', authController.loginUser); // Ruta para login


module.exports = router;
