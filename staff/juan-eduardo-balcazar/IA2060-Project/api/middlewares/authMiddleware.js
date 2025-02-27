import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }
    try {
        const decoded = jwt.verify(token, 'secreto');
        req.user = { id: decoded.id, role: decoded.role };
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token inválido o expirado.' });
    }
};

export default authMiddleware;
