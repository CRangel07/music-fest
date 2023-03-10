
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const sectionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(sectionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        })
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="./build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="./build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="./build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;

        // imagen.onclick = function(){
        //     mostrarImagen(i);
        // }

        imagen.addEventListener('click', function(){
            mostrarImagen(i);
        })


        galeria.appendChild(imagen);
    }
}

function mostrarImagen(index){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="./build/img/grande/${index}.avif" type="image/avif">
            <source srcset="./build/img/grande/${index}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="./build/img/grande/${index}.jpg" alt="imagen galeria grande">
        `;
    
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar');

        overlay.onclick = function(){
            overlay.remove();
            body.classList.remove('fijar');
        }
}