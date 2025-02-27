import express from express;
import bcrypt from bcryptjs;
import jwt from jsonwebtoken;
import User from /models/User;

const router = express.Router();

// Ruta para el login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

// export default router;

export const authenticateUser = (req, res, next) => {
    // Implementación de autenticación
    next();
};

export const authorizeRole = (roles) => (req, res, next) => {
    // Implementación de autorización
    if (roles.includes(req.user.role)) {
        return next();
    }
    res.status(403).json({ message: 'No autorizado' });
};
