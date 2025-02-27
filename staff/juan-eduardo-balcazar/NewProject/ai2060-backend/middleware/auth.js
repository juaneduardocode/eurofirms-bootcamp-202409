import jwt from jsonwebtoken;
import User from '../models/User'; // Asegúrate de tener este modelo en tu proyecto

// Middleware para autenticar usuarios
const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtener token del header Authorization

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar token con tu clave secreta
        req.user = await User.findById(decoded.id).select('-password'); // Almacenar usuario autenticado en req.user
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido.' });
    }
};

// Middleware para autorizar roles específicos
const authorizeRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acceso denegado. No tienes permiso para realizar esta acción.' });
        }
        next();
    };
};

export default { authenticateUser, authorizeRole };
