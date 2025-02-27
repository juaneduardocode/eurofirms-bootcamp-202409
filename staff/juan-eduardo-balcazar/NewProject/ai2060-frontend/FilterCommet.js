router.get('/:id/comments', verifyRole(['admin', 'commercial', 'provider', 'client']), async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.user.role;

        const data = await Data.findById(id).populate('comments.author', 'username');
        if (!data) return res.status(404).json({ message: 'Dato no encontrado.' });

        const comments = data.comments.filter((comment) =>
            !comment.isPrivate || role === 'admin'
        );

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los comentarios.' });
    }
});
