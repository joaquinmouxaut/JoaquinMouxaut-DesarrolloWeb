document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    // navegacionFija();
    iniciarHero();
    eventListeners();
});

// function navegacionFija() {
//     const navBg = document.querySelector('.nav-bg');
//     const navegacion = document.querySelector('.navegacion-principal');

//     //Registrar el InterseccionObserver
//     const observer = new IntersectionObserver(function(entries) {
//         if(entries[0].isIntersecting) {
//             navBg.classList.remove('fijo');
//             navegacion.classList.remove('fijo');
//         } else {
//             navBg.classList.add('fijo');
//             navegacion.classList.add('fijo');
//         }
//     });

//     //Elemento a Observar
//     observer.observe(document.querySelector('.titulo'));
// }

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
}

function iniciarHero() {
    const contenido = document.querySelector( '.contenido-video' );
    const navbar = document.querySelector( '.navegacion-principal' );
    const mobilMenu = document.querySelector( '.mobil-menu' );
    setTimeout(() => {
        contenido.classList.add( 'mostrar' );
        if( screen.width > 768 ) {
            navbar.classList.add( 'mostrar' );
        } else {
            mobilMenu.classList.add( 'mostrar' );
        }
    }, 1000);
}

function eventListeners() {
    const mobilMenu = document.querySelector( '.mobil-menu' );
    mobilMenu.addEventListener( 'click', navegacionResponsive );
}

function navegacionResponsive() {
    const navegacionMobil = document.querySelector( '.navegacion-mobil' );
    const contenido = document.querySelector( '.contenido-video' );
    navegacionMobil.classList.toggle( 'desplegar' );
    contenido.classList.toggle( 'mostrar' );
}