let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    close.style.display = "block";
    menu.style.display = "flex";
});

close.addEventListener('click', () => {
    close.style.display = "none";
    hamburger.style.display = "block";
    menu.style.display = "none";
});