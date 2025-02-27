import express from express;
import User from /models/User; // Asegúrate de que este modelo esté configurado
const router = express.Router();

// Ruta para crear un usuario
router.post('/users', async (req, res) => {
    const { username, email, phone, password, role } = req.body;
    try {
        const user = new User({
            username,
            email,
            phone,
            password,
            role,
            date: new Date(),
            status: 'open'
        });
        await user.save();
        res.status(201).json({ message: 'Usuario creado correctamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});

export default router;
