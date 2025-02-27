import Info from '../models/Info.js';

// Controlador para crear información
export const createInfo = async (req, res) => {
    const {
        companyName,
        companyActivity,
        companyPhone,
        receptionistName,
        contactName,
        contactPhone,
        contactEmail,
        description
    } = req.body;

    try {
        // Validar que todos los campos requeridos estén presentes
        if (!companyName || !companyActivity || !companyPhone) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

        // Crear una nueva instancia del modelo
        const info = new Info({
            user: req.user.id, // Supone que `req.user.id` está establecido por el middleware de autenticación
            companyName,
            companyActivity,
            companyPhone,
            receptionistName,
            contactName,
            contactPhone,
            contactEmail,
            description,
        });

        // Guardar en la base de datos
        await info.save();

        res.status(201).json({ message: 'Información creada exitosamente', data: info });
    } catch (err) {
        console.error('Error al crear la información:', err);
        res.status(500).json({ message: 'Error al crear la información', error: err.message });
    }
};

// Controlador para obtener información
export const getInfo = async (req, res) => {
    try {
        // Recuperar información asociada al usuario autenticado
        const info = await Info.find({ user: req.user.id });

        // Enviar respuesta
        res.status(200).json(info);
    } catch (err) {
        console.error('Error al recuperar la información:', err);
        res.status(500).json({ message: 'Error al recuperar la información', error: err.message });
    }
};
export default { createInfo, getInfo }