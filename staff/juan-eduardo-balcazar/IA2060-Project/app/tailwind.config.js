/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/views/**/*.ejs", // Analiza todas las vistas en src/views
        "./src/js/**/*.js",     // Analiza JavaScript si aplicas clases dinámicas
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
