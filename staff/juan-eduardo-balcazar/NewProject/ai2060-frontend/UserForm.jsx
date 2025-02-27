import React, { useState } from 'react';

const UserForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('commercial');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = { email, username, phone, password, role };

        try {
            const response = await fetch('/ai2060-backend/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Usuario creado exitosamente.');
                setEmail('');
                setUsername('');
                setPhone('');
                setPassword('');
                setRole('commercial');
            } else {
                setMessage(data.message || 'Error al crear el usuario.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error de red.');
        }
    };

    return (
        <div>
            <h2>Registrar Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="commercial">Commercial</option>
                        <option value="provider">Provider</option>
                        <option value="client">Client</option>
                    </select>
                </div>
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UserForm;
