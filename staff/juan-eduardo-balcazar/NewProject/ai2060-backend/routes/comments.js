import express from 'express';
const router = express.Router();
import Comment from '../models/Comment.js';
import { authenticateUser } from '../middleware/auth.js';

// Crear comentario
router.post('/', authenticateUser, async (req, res) => {
    const { content, visibility, dataId } = req.body;
    const author = req.user.id;

    try {
        const comment = new Comment({ content, visibility, dataId, author });
        await comment.save();
        res.status(201).json({ message: 'Comentario agregado con éxito', comment });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar comentario', error });
    }
});

// Obtener comentarios
router.get('/:dataId', authenticateUser, async (req, res) => {
    try {
        const filter = req.user.role === 'admin'
            ? { dataId: req.params.dataId }
            : { dataId: req.params.dataId, $or: [{ visibility: 'public' }, { author: req.user.id }] };
        const comments = await Comment.find(filter).populate('author', 'username').sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener comentarios', error });
    }
});

export default router;
