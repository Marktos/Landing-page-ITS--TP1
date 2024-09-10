document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguesa = document.querySelector('.menu_hamburguesa');
    const navLinks = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');

    // esta es la funcionabilidad del menu hamburguesa
    menuHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

// cambio el color de los titulos
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".hero h2");

    headers.forEach(header => {
        header.addEventListener("mouseover", function() {
            header.style.color = "#32cd32"; // Cambia al color verde en hover
        });

        header.addEventListener("mouseout", function() {
            header.style.color = "#ffffff"; // Regresa al color blanco original
        });
    });
});
