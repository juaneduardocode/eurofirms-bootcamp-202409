import mongoose from mongoose;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, d: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'commercial', 'provider', 'client'], required: true },
    date: { type: Date, default: Date.now },
});

// Usa `mongoose.models` para evitar sobrescribir el modelo existente
export default mongoose.models.User || mongoose.model('User', userSchema);