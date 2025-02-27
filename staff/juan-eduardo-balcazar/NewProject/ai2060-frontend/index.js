import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas directamente
import dataRoutes from './routes/data.js';
import commentRoutes from './routes/comments.js';

// Configurar rutas base
app.use('/ai2060-backend/data', dataRoutes);
app.use('/ai2060-backend/comments', commentRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
