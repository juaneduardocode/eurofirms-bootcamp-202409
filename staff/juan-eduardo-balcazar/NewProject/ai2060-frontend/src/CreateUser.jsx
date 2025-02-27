import React, { useState } from "react";

function CreateUser({ adminId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("client");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/create-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    adminId, // ID del administrador autenticado
                    username,
                    password,
                    role,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`Usuario creado exitosamente: ${data.user.username}`);
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            setMessage("Error al conectar con el servidor.");
        }
    };

    return (
        <div className="p-6 w-full sm:w-96 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl text-center mb-4">Crear Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                >
                    <option value="client">Client</option>
                    <option value="provider">Provider</option>
                    <option value="commercial">Commercial</option>
                    <option value="admin">Admin</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Crear Usuario
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
}

export default CreateUser;
