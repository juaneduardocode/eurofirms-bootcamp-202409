// import React, { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [currentScreen, setCurrentScreen] = useState(1);
//   const [role, setRole] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setCurrentScreen(2);
//   };

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//     setCurrentScreen(3);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-blue-500 text-white text-center p-4">
//         <h1 className="text-2xl">{username ? `${username} - AI2060` : "AI2060"}</h1>
//         <h2 className="text-xl mt-2">Actividad en progreso</h2>
//       </header>

//       <main className="flex-1 flex justify-center items-center">
//         {currentScreen === 1 && (
//           <div className="p-6 w-full sm:w-96 bg-white shadow-lg rounded-lg">
//             <h2 className="text-xl text-center mb-4">Bienvenido a AI2060 Activity</h2>
//             <form onSubmit={handleLogin}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//               >
//                 Iniciar Sesión
//               </button>
//             </form>
//           </div>
//         )}

//         {currentScreen === 2 && (
//           <div className="p-6 w-full sm:w-96 bg-white shadow-lg rounded-lg">
//             <h2 className="text-xl text-center mb-4">Selecciona un Rol</h2>
//             <div className="space-y-4">
//               <button
//                 onClick={() => handleRoleSelect("commercial")}
//                 className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//               >
//                 Commercial
//               </button>
//               <button
//                 onClick={() => handleRoleSelect("provider")}
//                 className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//               >
//                 Provider
//               </button>
//               <button
//                 onClick={() => handleRoleSelect("client")}
//                 className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//               >
//                 Client
//               </button>
//             </div>
//           </div>
//         )}

//         {currentScreen === 3 && (
//           <div className="p-6 w-full sm:w-96 bg-white shadow-lg rounded-lg">
//             <h2 className="text-xl text-center mb-4">Manejo de Información</h2>
//             <div className="space-y-4">
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 View Data
//               </button>
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 Create Data
//               </button>
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 Edit Data
//               </button>
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 Delete Data
//               </button>
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 Add Comment
//               </button>
//               <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//                 Delete Comment
//               </button>
//             </div>
//           </div>
//         )}
//       </main>

//       <footer className="bg-blue-500 text-white text-center p-4">
//         <button
//           onClick={() => setCurrentScreen(currentScreen - 1)}
//           className="bg-red-500 text-white p-2 rounded-lg mr-4 hover:bg-red-600"
//         >
//           Back
//         </button>
//         <button
//           onClick={() => setCurrentScreen(currentScreen + 1)}
//           className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
//         >
//           Next
//         </button>
//       </footer>
//     </div>
//   );
// }


// // useEffect(() => {
// //   fetch('http://localhost:5000/ai2060-backend/users')
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(error => console.error('Error:', error));
// // }, []);

// // Implementacion adicional 

// useEffect(() => {
//   fetch('http://:5000/ai2060-backend/data', { headers: { Authorization: userToken } })
//     .then((res) => res.json())
//     .then((data) => setData(data));

//   fetch(`http://:5000/ai2060-backend/comments/${selectedDataId}`, { headers: { Authorization: userToken } })
//     .then((res) => res.json())
//     .then((comments) => setComments(comments));
// }, [userToken, selectedDataId]);



// export default App;
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [selectedDataId, setSelectedDataId] = useState(null);

  const userToken = 'Bearer YOUR_TOKEN'; // Reemplaza con un token válido

  useEffect(() => {
    // Fetch data
    fetch('http://localhost:5000/ai2060-backend/routes/data', {
      headers: { Authorization: userToken },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));

    // Fetch comments for the selected data
    if (selectedDataId) {
      fetch(`http://localhost:5000/ai2060-backend/routes/comments/${selectedDataId}`, {
        headers: { Authorization: userToken },
      })
        .then((res) => res.json())
        .then((comments) => setComments(comments))
        .catch((error) => console.error('Error fetching comments:', error));
    }
  }, [selectedDataId, userToken]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/ai2060-backend/routes/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        content: comment,
        visibility: 'public',
        dataId: selectedDataId,
      }),
    })
      .then((res) => res.json())
      .then((newComment) => setComments([...comments, newComment.comment]))
      .catch((error) => console.error('Error submitting comment:', error));
  };

  return (
    <div>
      <h1>DATOS</h1>
      <ul>
        {data.map((d) => (
          <li key={d._id} onClick={() => setSelectedDataId(d._id)}>
            {d.title}
          </li>
        ))}
      </ul>

      {selectedDataId && (
        <div>
          <h2>Comentarios</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>{comment.content}</li>
            ))}
          </ul>

          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe un comentario"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

// if (loading) return <p>Cargando...</p>;


export default App;
