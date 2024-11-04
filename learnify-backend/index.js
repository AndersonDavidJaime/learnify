// learnify-backend/index.js

// Importar paquetes y módulos necesarios
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const courseRoutes = require('./routes/course');

// Importar modelos para sincronizar tablas en la base de datos
require('./models/User');
require('./models/Course');
require('./models/Material');
require('./models/Enrollment');

// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas de autenticación y cursos
app.use('/api/auth', authRoutes);// Rutas de autenticación
app.use('/api/courses', courseRoutes);  // Rutas de cursos

// Sincronizar modelos con la base de datos y luego iniciar el servidor
sequelize.sync({ alter: true })  // Usa `alter` para actualizar tablas sin eliminar datos
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('Error al sincronizar modelos:', error));
