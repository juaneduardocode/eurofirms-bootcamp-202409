// Nuevas dependencias
import jwt from 'jsonwebtoken';
import { Schema, model } from 'mongoose';

// Middleware para autenticar al usuario
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};

// Middleware para verificar roles
const authorizeRole = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
};

// Modelo de Datos
const dataSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

const Data = model('Data', dataSchema);

// Modelo de Comentarios
const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
    dataId: { type: Schema.Types.ObjectId, ref: 'Data', required: true },
    createdAt: { type: Date, default: Date.now },
});

const Comment = model('Comment', commentSchema);

// Ruta para CRUD de Datos (solo comerciales)
app.post('/ai2060-backend/data', authenticateUser, authorizeRole(['commercial']), async (req, res) => {
    const { title, description } = req.body;
    const createdBy = req.user.id;

    try {
        const data = new Data({ title, description, createdBy });
        await data.save();
        res.status(201).json({ message: 'Datos creados con éxito', data });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear datos', error });
    }
});

app.get('/ai2060-backend/data', authenticateUser, async (req, res) => {
    try {
        const filter = req.user.role === 'commercial' ? { createdBy: req.user.id } : {};
        const data = await Data.find(filter).populate('createdBy', 'username');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error });
    }
});

app.delete('/ai2060-backend/data/:id', authenticateUser, authorizeRole(['commercial']), async (req, res) => {
    try {
        const data = await Data.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
        if (!data) return res.status(404).json({ message: 'Dato no encontrado' });
        res.status(200).json({ message: 'Dato eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar dato', error });
    }
});

// Ruta para comentarios
app.post('/ai2060-backend/comments', authenticateUser, async (req, res) => {
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

app.get('/ai2060-backend/comments/:dataId', authenticateUser, async (req, res) => {
    try {
        const filter = req.user.role === 'admin' ? { dataId: req.params.dataId } : { dataId: req.params.dataId, $or: [{ visibility: 'public' }, { author: req.user.id }] };
        const comments = await Comment.find(filter).populate('author', 'username').sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener comentarios', error });
    }
});
