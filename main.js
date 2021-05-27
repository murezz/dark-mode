// typed animation
new Typed('#typed', {
    strings: ['Web Developer | UI Designer.'],
    typeSpeed: 150,
    delaySpeed: 250,
    loop: true
});

// dark mode
const sun = document.querySelector('.sun');
const body = document.querySelector('body');

sun.onclick = function () {
    body.classList.toggle('dark');
}

