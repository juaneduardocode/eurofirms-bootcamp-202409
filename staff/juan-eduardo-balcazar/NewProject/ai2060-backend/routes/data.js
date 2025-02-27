import express from 'express';
const router = express.Router();
import Data from '../models/data.js'; // Asegúrate de que el modelo esté correctamente importado
import { authenticateUser, authorizeRole } from '../middleware/auth';

// Ejemplo: Crear un nuevo dato
router.post('/', authenticateUser, authorizeRole(['commercial']), async (req, res) => {
    try {
        const { title, description } = req.body;
        const createdBy = req.user.id;

        const newData = new Data({ title, description, createdBy });
        await newData.save();

        res.status(201).json({ message: 'Datos creados exitosamente', data: newData });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear datos', error });
    }
});

// Ejemplo: Obtener todos los datos
// router.get('/', (req, res) => {
//     res.send('Ruta /data funcionando correctamente.');
// });

// DESPUES DE DATA FUNCIONANDO
router.get('/', authenticateUser, async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error });
    }
});

export default router;



