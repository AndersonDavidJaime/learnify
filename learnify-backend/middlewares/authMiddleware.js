// learnify-backend/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del header

    if (!token) {
        return res.sendStatus(401); // No autorizado
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Prohibido
        }

        req.user = user; // Guardar la información del usuario en la solicitud
        next(); // Llamar a la siguiente función de middleware o ruta
    });
};

module.exports = authenticateToken;
