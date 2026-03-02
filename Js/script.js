const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const imagen = document.getElementById("imagen");
const corazones = document.getElementById("corazones");
const titulo = document.getElementById("titulo");

let tamaño = 1;
let aceptado = false; // controla cuando ya dijeron que sí

// ==========================
// BOTÓN SÍ
// ==========================
btnSi.addEventListener("click", () => {

    aceptado = true; // ya no crecen más

    imagen.src = "Img/si.jpg";
    titulo.textContent = "Sabía que dirías que sí 😍💍";
    titulo.style.color = "white";
    document.body.style.background = "linear-gradient(135deg, #000000, #000000)";

    // Restaurar tamaño normal
    tamaño = 1;
    btnSi.style.transform = "scale(1)";
    btnNo.style.transform = "scale(1)";

    // Regresar botón NO a posición centrada
    btnNo.style.position = "static";

    lanzarCorazones();
});

// ==========================
// BOTÓN NO (HUYE)
// ==========================
btnNo.addEventListener("mouseover", moverBoton);
btnNo.addEventListener("touchstart", moverBoton);
btnNo.addEventListener("click", moverBoton);

function moverBoton() {

    if (aceptado) return; // si ya dijeron que sí, ya no huye

    const margen = 10;

    const anchoDisponible = window.innerWidth - btnNo.offsetWidth - margen;
    const altoDisponible = window.innerHeight - btnNo.offsetHeight - margen;

    const x = Math.random() * anchoDisponible;
    const y = Math.random() * altoDisponible;

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

    // El botón SÍ crece
    tamaño += 0.15;
    btnSi.style.transform = `scale(${tamaño})`;
}

// ==========================
// LLUVIA DE CORAZONES
// ==========================
function lanzarCorazones() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        corazones.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 300);
}