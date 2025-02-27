// Código básico para tu proyecto en JavaScript
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡La página ha cargado exitosamente!");

    const main = document.querySelector('main');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Este mensaje fue agregado dinámicamente por IA2060.";
    main.appendChild(newParagraph);
});
