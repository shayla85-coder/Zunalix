const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close-btn");

/* ABRIR MENÚ */
hamburger.addEventListener("click", () => {
    nav.classList.add("active");
});

/* CERRAR MENÚ */
closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
});