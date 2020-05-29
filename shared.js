const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.mobile-nav__close');

function openMobileNav() {
    mobileNav.style.display = 'block';
}

function closeMobileNav() {
    mobileNav.style.display = 'none';
}










toggleButton.addEventListener('click', openMobileNav);

closeButton.addEventListener('click', closeMobileNav);