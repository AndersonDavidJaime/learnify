require('dotenv').config(); // Cargar las variables de entorno
const { Client } = require('pg'); // Importar el cliente de PostgreSQL

// Configuración de conexión usando las variables de entorno
const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Función de conexión para probar la configuración
async function testConnection() {
    try {
        await client.connect();
        console.log("¡Conexión a la base de datos exitosa!");
        await client.end();
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error.message);
    }
}

testConnection(); // Ejecutar la prueba de conexión
