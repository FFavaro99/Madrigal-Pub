const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.mobile-nav__close');

function openMobileNav() {
    mobileNav.classList.add('open-mobile-nav');
}

function closeMobileNav() {
    mobileNav.classList.remove('open-mobile-nav');
}










toggleButton.addEventListener('click', openMobileNav);

closeButton.addEventListener('click', closeMobileNav);