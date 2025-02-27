// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import Contact from './models/Contact.js';  // Asegúrate de que esta importación sea única
// import User from './models/User.js';       // Consolidamos todas las importaciones aquí
// import { verifyAdmin } from './middleware/auth.js'; // Si es necesario, este archivo debe contener la verificación de admin

// const app = express();
// app.use(express.json());

// // Esquema de usuario
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: {
//         type: String,
//         enum: ['comercial', 'administrador', 'proveedor', 'cliente'],
//         required: true
//     }
// });

// const User = mongoose.model('User', userSchema);

// // Ruta para registrar un nuevo usuario
// app.post('/register', async (req, res) => {
//     const { username, password, role } = req.body;

//     // Validar el rol
//     if (!['comercial', 'administrador', 'proveedor', 'cliente'].includes(role)) {
//         return res.status(400).json({ message: 'Rol no válido' });
//     }

//     // Verificar si el usuario ya existe
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//         return res.status(400).json({ message: 'Usuario ya existe' });
//     }

//     // Hashear la contraseña
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Crear el nuevo usuario
//     const user = new User({
//         username,
//         password: hashedPassword,
//         role
//     });

//     await user.save();
//     res.status(201).json({ message: 'Usuario creado correctamente' });
// });

// // Ruta para iniciar sesión
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     // Buscar al usuario
//     const user = await User.findOne({ username });
//     if (!user) {
//         return res.status(400).json({ message: 'Usuario no encontrado' });
//     }

//     // Verificar la contraseña
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//         return res.status(400).json({ message: 'Contraseña incorrecta' });
//     }

//     // Crear un token JWT
//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
// });

// // Esquema de contacto
// const contactSchema = new mongoose.Schema({
//     companyName: String,
//     contactPerson: String,
//     phoneNumber: String,
//     email: String,
//     community: String,
//     country: String,
//     contactDate: Date,
//     nextContactDate: Date,
//     comments: String
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // Middleware para verificar el JWT y rol
// function verifyAdmin(req, res, next) {
//     const token = req.header('Authorization')?.split(' ')[1];
//     if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) return res.status(401).json({ message: 'Token no válido' });
//         if (decoded.role !== 'administrador') {
//             return res.status(403).json({ message: 'Acceso solo permitido a administradores' });
//         }
//         req.user = decoded;
//         next();
//     });
// }

// // Ruta para agregar contacto
// app.post('/add-contact', verifyAdmin, async (req, res) => {
//     const { companyName, contactPerson, phoneNumber, email, community, country, contactDate, nextContactDate, comments } = req.body;

//     const newContact = new Contact({
//         companyName,
//         contactPerson,
//         phoneNumber,
//         email,
//         community,
//         country,
//         contactDate,
//         nextContactDate,
//         comments
//     });

//     await newContact.save();
//     res.status(201).json({ message: 'Contacto añadido correctamente' });
// });

// // Esquema de comentario para contactos
// const comentarioSchema = new mongoose.Schema({
//     texto: { type: String, required: true },
//     privado: { type: Boolean, default: false },
//     fecha: { type: Date, default: Date.now },
// });

// const contactoSchema = new mongoose.Schema({
//     empresa: { type: String, required: true },
//     personaContacto: { type: String, required: true },
//     telefono: { type: String, required: true },
//     email: { type: String, required: true },
//     comunidad: { type: String },
//     pais: { type: String },
//     fechaContacto: { type: Date, default: Date.now },
//     fechaProximoContacto: { type: Date },
//     comentarios: [comentarioSchema],  // Comentarios añadidos a los contactos
// });

// const Contacto = mongoose.model('Contacto', contactoSchema);

// // Ruta para obtener los contactos
// app.get('/contactos', async (req, res) => {
//     try {
//         const contactos = await Contacto.find();
//         const isAdmin = req.user && req.user.role === 'administrador';

//         if (!isAdmin) {
//             contactos.forEach(contacto => {
//                 contacto.comentarios = contacto.comentarios.filter(comentario => !comentario.privado);
//             });
//         }

//         res.json(contactos);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error al obtener los contactos');
//     }
// });

// // Ruta para agregar comentarios privados (solo admin)
// app.post('/:contactoId/comentarios', verifyAdmin, async (req, res) => {
//     const { contactoId } = req.params;
//     const { texto, privado } = req.body;

//     try {
//         const contacto = await Contacto.findById(contactoId);
//         if (!contacto) {
//             return res.status(404).send('Contacto no encontrado');
//         }

//         const nuevoComentario = { texto, privado };
//         contacto.comentarios.push(nuevoComentario);
//         await contacto.save();
//         res.status(200).json(contacto);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error al agregar el comentario');
//     }
// });

// // Servidor de Express
// const PORT = process.env.PORT || 8080;
// mongoose.connect('mongodb://localhost:27017/ia2060', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Servidor corriendo en el puerto ${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('Error al conectar a la base de datos', err);
//     });
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Contact from './Contact.js';  // Asegúrate de que esta importación sea única
import User from './models/User.js';       // Consolidamos todas las importaciones aquí
// import { verifyAdmin } from './middleware/auth.js'; // Si es necesario, este archivo debe contener la verificación de admin

// import { verifyAdmin } from './middlewares';


const app = express();
app.use(express.json());

// Esquema de usuario
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['comercial', 'administrador', 'proveedor', 'cliente'],
        required: true
    }
});

// const User = mongoose.model('User', userSchema);

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    // Validar el rol
    if (!['comercial', 'administrador', 'proveedor', 'cliente'].includes(role)) {
        return res.status(400).json({ message: 'Rol no válido' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuario ya existe' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const user = new User({
        username,
        password: hashedPassword,
        role
    });

    await user.save();
    res.status(201).json({ message: 'Usuario creado correctamente' });
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Buscar al usuario
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear un token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Esquema de contacto
const contactSchema = new mongoose.Schema({
    companyName: String,
    contactPerson: String,
    phoneNumber: String,
    email: String,
    community: String,
    country: String,
    contactDate: Date,
    nextContactDate: Date,
    comments: String
});

// const Contact = mongoose.model('Contact', contactSchema);

// Middleware para verificar el JWT y rol
function verifyAdmin(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token no válido' });
        if (decoded.role !== 'administrador') {
            return res.status(403).json({ message: 'Acceso solo permitido a administradores' });
        }
        req.user = decoded;
        next();
    });
}

// Ruta para agregar contacto
app.post('/add-contact', verifyAdmin, async (req, res) => {
    const { companyName, contactPerson, phoneNumber, email, community, country, contactDate, nextContactDate, comments } = req.body;

    const newContact = new Contact({
        companyName,
        contactPerson,
        phoneNumber,
        email,
        community,
        country,
        contactDate,
        nextContactDate,
        comments
    });

    await newContact.save();
    res.status(201).json({ message: 'Contacto añadido correctamente' });
});

// Esquema de comentario para contactos
const comentarioSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    privado: { type: Boolean, default: false },
    fecha: { type: Date, default: Date.now },
});

const contactoSchema = new mongoose.Schema({
    empresa: { type: String, required: true },
    personaContacto: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    comunidad: { type: String },
    pais: { type: String },
    fechaContacto: { type: Date, default: Date.now },
    fechaProximoContacto: { type: Date },
    comentarios: [comentarioSchema],  // Comentarios añadidos a los contactos
});

// const Contacto = mongoose.model('Contacto', contactoSchema);

// Ruta para obtener los contactos
app.get('/contactos', async (req, res) => {
    try {
        const contactos = await contactos.find();
        const isAdmin = req.user && req.user.role === 'administrador';

        if (!isAdmin) {
            contactos.forEach(contacto => {
                contacto.comentarios = contacto.comentarios.filter(comentario => !comentario.privado);
            });
        }

        res.json(contactos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los contactos');
    }
});

// Ruta para agregar comentarios privados (solo admin)
app.post('/:contactoId/comentarios', verifyAdmin, async (req, res) => {
    const { contactoId } = req.params;
    const { texto, privado } = req.body;

    try {
        const contacto = await Contacto.findById(contactoId);
        if (!contacto) {
            return res.status(404).send('Contacto no encontrado');
        }

        const nuevoComentario = { texto, privado };
        contacto.comentarios.push(nuevoComentario);
        await contacto.save();
        res.status(200).json(contacto);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al agregar el comentario');
    }
});

// Servidor de Express
const PORT = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/ia2060', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos', err);
    });
