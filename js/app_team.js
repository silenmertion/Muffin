function burgermenu() {
    const MobileMenu = document.querySelector('.header__nav')
    MobileMenu.classList.toggle('active')
    document.querySelector('.header__burger').classList.toggle("active")
    document.querySelector('body').classList.toggle("lock")
}