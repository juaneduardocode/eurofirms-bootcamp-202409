import React, { useState, useEffect } from 'react';

const DataView = () => {
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    useEffect(() => {
        fetch('/ai2060-backend/data/view', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error al obtener datos:', error));
    }, []);

    const fetchComments = (dataId) => {
        fetch(`/ai2060-backend/data/${dataId}/comments`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((response) => response.json())
            .then((comments) => setComments(comments))
            .catch((error) => console.error('Error al obtener comentarios:', error));
    };

    const handleCommentSubmit = (dataId) => {
        fetch(`/ai2060-backend/data/${dataId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ content: newComment, isPrivate }),
        })
            .then((response) => response.json())
            .then((result) => {
                alert(result.message);
                setNewComment('');
                fetchComments(dataId); // Actualizar comentarios
            })
            .catch((error) => console.error('Error al agregar comentario:', error));
    };

    return (
        <div>
            <h2>Datos</h2>
            {data.map((item) => (
                <div key={item._id}>
                    <h3>{item.content}</h3>
                    <p>Autor: {item.author.username}</p>

                    <button onClick={() => fetchComments(item._id)}>Ver Comentarios</button>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment._id}>
                                <strong>{comment.author.username}</strong> ({new Date(comment.createdAt).toLocaleString()}):{' '}
                                {comment.content}
                                {comment.isPrivate && <span> (Privado)</span>}
                            </li>
                        ))}
                    </ul>

                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escribe un comentario"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isPrivate}
                            onChange={(e) => setIsPrivate(e.target.checked)}
                        />
                        Privado
                    </label>
                    <button onClick={() => handleCommentSubmit(item._id)}>Comentar</button>
                </div>
            ))}
        </div>
    );
};

export default DataView;
