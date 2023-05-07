var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function burgermenu() {
    const MobileMenu = document.querySelector('.header__nav')
    MobileMenu.classList.toggle('active')
    document.querySelector('.header__burger').classList.toggle("active")
    document.querySelector('body').classList.toggle("lock")
}