const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/ai2060', { useNewUrlParser: true, useUnifiedTopology: true });

const seedUsers = async () => {
    try {
        await User.deleteMany(); // Limpia la colección
        await User.insertMany([
            { username: 'admin', email: 'admin@example.com', phone: '1234567890', password: 'admin123', role: 'admin', date: new Date(), status: 'open' },
            { username: 'commercial1', email: 'commercial1@example.com', phone: '1234567890', password: 'commercial123', role: 'commercial', date: new Date(), status: 'open' },
            { username: 'client1', email: 'client1@example.com', phone: '1234567890', password: 'client123', role: 'client', date: new Date(), status: 'open' },
            { username: 'provider1', email: 'provider1@example.com', phone: '1234567890', password: 'provider123', role: 'provider', date: new Date(), status: 'open' },
        ]);
        console.log('Usuarios iniciales creados');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error al crear usuarios:', error);
    }
};

seedUsers();
