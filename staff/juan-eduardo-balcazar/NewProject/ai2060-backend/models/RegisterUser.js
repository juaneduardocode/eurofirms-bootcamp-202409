import bcrypt from bcryptjs;
import User from /models/User;

// Ruta para registrar usuarios
app.post('/ai2060-backend/users', async (req, res) => {
    try {
        const { email, username, phone, password, role } = req.body;

        if (!email || !username || !phone || !password || !role) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        // Verificar si el rol es válido
        const validRoles = ['admin', 'commercial', 'provider', 'client'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Rol inválido.' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

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
        res.status(500).json({ message: 'Error al crear el usuario.', error });
    }
});
