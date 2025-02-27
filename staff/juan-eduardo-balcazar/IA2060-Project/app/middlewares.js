// middlewares.js
export function verifyAdmin(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });
    // Continúa con la lógica de verificación del JWT...
}
