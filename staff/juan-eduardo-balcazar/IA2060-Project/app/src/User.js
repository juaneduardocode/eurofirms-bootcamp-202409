// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     username: { type: String, required: true },
//     phone: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true, enum: ['commercial', 'admin', 'provider', 'client'] },
//     date: { type: Date, default: Date.now },
//     status: { type: String, enum: ['open', 'closed'], default: 'open' },
// });

// export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['commercial', 'admin', 'provider', 'client'] },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
});

export default mongoose.model('User', userSchema);
