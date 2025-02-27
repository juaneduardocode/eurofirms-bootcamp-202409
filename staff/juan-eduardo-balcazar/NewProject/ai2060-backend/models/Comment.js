import mongoose from mongoose;

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
    dataId: { type: mongoose.Schema.Types.ObjectId, ref: 'Data', required: true },
    createdAt: { type: Date, default: Date.now },
});

// Usa `mongoose.models` para evitar sobrescribir el modelo existente
export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
