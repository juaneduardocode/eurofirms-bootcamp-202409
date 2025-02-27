// Importaciones necesarias
import express from express;
import bcrypt from bcryptjs;
import User from /models/User; // Asegúrate de que la ruta del modelo sea correcta

const router = express.Router();

// Ruta para obtener todos los usuarios (solo admin)
router.get('/ai2060-backend/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Excluye la contraseña de la respuesta
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
});

// Ruta para registrar un usuario
router.post('/ai2060-backend/users', async (req, res) => {
    const { email, username, phone, password, role } = req.body;

    // Validar los datos de entrada
    if (!email || !username || !phone || !password || !role) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        // Verifica si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya está registrado.' });
        }

        // Encripta la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario
        const newUser = new User({
            email,
            username,
            phone,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario creado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

export default router;
