document.querySelector(".eclair").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("menu_show");
    this.classList.toggle("animation");
    document.body.style.overflow = 'auto';
})


document.querySelector('.close_cross-index').addEventListener('click', function() {
    document.querySelector(".menu").classList.toggle("menu_show");
    document.body.style.overflow = 'hidden';
})

