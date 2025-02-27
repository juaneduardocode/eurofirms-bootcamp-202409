router.get('/data', authenticateUser, async (req, res) => {
    const { id: userId } = req.user; // `authenticateUser` debe establecer `req.user`

    try {
        // Filtrar los datos creados por el usuario autenticado
        const data = await Data.find({ author: userId });

        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No se encontraron datos para este usuario.' });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error });
    }
});

