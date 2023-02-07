const iconoMenu = document.querySelector('#icono-menu'),
menuInfo = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menuInfo.classList.toggle('active');
    document.body.classList.toggle('opacity');
})