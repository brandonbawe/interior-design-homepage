const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector(".close-btn");
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hide');
})