import mongoose from mongoose;

mongoose.connect('mongodb://localhost:27017/ia2060', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));
