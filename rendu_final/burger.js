

document.addEventListener('DOMContentLoaded', function()  {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

