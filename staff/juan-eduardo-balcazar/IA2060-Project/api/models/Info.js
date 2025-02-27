import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyName: { type: String, required: true },
    companyActivity: { type: String },
    companyPhone: { type: String, required: true },
    receptionistName: { type: String, required: true },
    contactName: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    date: { type: Date, default: Date.now },
    description: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Info', infoSchema);
