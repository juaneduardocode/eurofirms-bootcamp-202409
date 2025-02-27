// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Si tienes un archivo CSS global
// import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
// import React from "react";
// import ReactDOM from "react-dom/client"; // 👈 Cambia la importación
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from './App.js'; // Asegúrate de incluir .js


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from './App.js'; // Asegúrate de incluir .js


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Si usas algún estilo global
// import App from './App'; // Asegúrate de que App.js exista
// import reportWebVitals from './reportWebVitals'; // Si tienes configurado esto

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App'; // Asegúrate de que el archivo App.js exista

const root = ReactDOM.createRoot(document.getElementById('root')); // Usamos createRoot para inicializar el render
root.render(<App />); // Renderiza el componente App
