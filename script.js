document.addEventListener('DOMContentLoaded', () => {
    const perfiles = document.querySelectorAll('.perfil');

    // Manejar el clic en los perfiles para la redirección
    perfiles.forEach(perfil => {
        perfil.addEventListener('click', () => {
            // Redirige a la página de películas
            window.location.href = 'peliculas.html';
        });
    });

    // Código para efectos dinámicos en las otras páginas (Problema, Solución)
    const problemaSecciones = document.querySelectorAll('.problema-seccion');
    const solucionSecciones = document.querySelectorAll('.solucion-seccion');

    // Función para añadir la clase 'visible' cuando la sección está en el viewport
    const handleScroll = (secciones) => {
        secciones.forEach(seccion => {
            const rect = seccion.getBoundingClientRect();
            // Si la sección está visible en la pantalla, añade la clase 'visible'
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                seccion.classList.add('visible');
            } else {
                seccion.classList.remove('visible');
            }
        });
    };

    // Agregar un evento de scroll para las secciones
    if (problemaSecciones.length > 0) {
        window.addEventListener('scroll', () => handleScroll(problemaSecciones));
        handleScroll(problemaSecciones); // Llama al inicio para chequear la visibilidad
    }

    if (solucionSecciones.length > 0) {
        window.addEventListener('scroll', () => handleScroll(solucionSecciones));
        handleScroll(solucionSecciones);
    }
});

document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.carrusel-item');
        const prevBtn = document.querySelector('.carrusel-btn.prev');
        const nextBtn = document.querySelector('.carrusel-btn.next');
        let current = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + items.length) % items.length;
            showItem(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % items.length;
            showItem(current);
        });

        showItem(current);
});