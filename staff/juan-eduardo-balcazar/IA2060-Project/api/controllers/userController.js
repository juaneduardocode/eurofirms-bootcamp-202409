// userController.js
import User from '../models/User.js';

const createUser = async (req, res) => {
    const { email, username, phone, password, role } = req.body;
    try {
        const user = new User({ email, username, phone, password, role });
        await user.save();
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el usuario', error: err });
    }
};

// Crear un objeto para exportarlo
const userController = {
    createUser,
};

export default userController;
