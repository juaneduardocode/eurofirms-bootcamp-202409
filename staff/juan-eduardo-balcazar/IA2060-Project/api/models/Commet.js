import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    visibility: { type: String, enum: ['private', 'public'], default: 'public' },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);
