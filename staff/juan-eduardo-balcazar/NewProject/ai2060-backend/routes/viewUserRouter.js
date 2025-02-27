// Ruta para listar usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Excluye la contraseña por seguridad
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
});
