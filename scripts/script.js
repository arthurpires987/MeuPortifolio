// NAVBAR
let navbar = document.getElementById('navbar');

window.addEventListener("scroll", function() {
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        navbar.classList.remove('hidden', 'shadow');
    } else {
        navbar.classList.add('hidden', 'shadow');
    }
}, false);
