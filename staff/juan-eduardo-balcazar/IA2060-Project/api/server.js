// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import infoRoutes from './routes/infoRoutes.js';
// import userRoutes from './routes/userRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8000;
// const DB_URL = process.env.DB_URL;

// // Middleware para parsear JSON
// app.use(express.json());

// // Rutas
// app.use('/info', infoRoutes);
// app.use('/users', userRoutes);

// // Ruta de prueba
// app.get('/', (req, res) => {
//     res.send('¡Servidor funcionando!');
// });

// // Iniciar el servidor
// const server = app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// // Manejo de errores del servidor
// server.on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//         console.error(`El puerto ${PORT} ya está en uso. Por favor, usa un puerto diferente.`);
//         process.exit(1);
//     } else {
//         console.error('Error en el servidor:', err);
//     }
// });
// // Ejemplo de conexión a la base de datos
// // mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('Base de datos conectada'))
// //     .catch(err => console.error('Error al conectar la base de datos:', err));
// // Conexión a MongoDB
// mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
//     // Opciones como useNewUrlParser y useUnifiedTopology ya no son necesarias.
// }).then(() => {
//     console.log('Base de datos conectada');
// }).catch((err) => {
//     console.error('Error al conectar con la base de datos:', err);
// });

// import cors from 'cors';

// // Permitir solicitudes desde todos los orígenes (frontend)
// app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:4000',
//     credentials: true
// }));
// app.get('/favicon.ico', (req, res) => res.status(204));  // Evita que se intente buscar un favicon




// // // import express from 'express';
// // // const app = express();

// app.get('/', (req, res) => {
//     res.send('API funcionando');
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Servidor en http://localhost:${port}`);
// });


import express from "express";

const app = express(); // 👈 Primero defines `app`
const PORT = 8000;     // 👈 Luego defines el puerto

app.get("/", (req, res) => { // 👈 Luego defines las rutas
    res.send("¡Servidor funcionando!");
});

app.listen(PORT, () => {  // 👈 Finalmente, inicias el servidor
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
