let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let menu = document.querySelector('.menu');
let hero = document.querySelector('.hero.mobile-only');

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    close.style.display = "block";
    menu.style.display = "flex";

    document.addEventListener('click', (event) => {
        if(close.style.display === "block" && !menu.contains(event.target) && !hamburger.contains(event.target)) {
            close.style.display = "none";
            hamburger.style.display = "block";
            menu.style.display = "none";

            if(event.target.tagName === 'A') {
                event.preventDefault();
            }
        }
    });
});

close.addEventListener('click', () => {
    close.style.display = "none";
    hamburger.style.display = "block";
    menu.style.display = "none";
});