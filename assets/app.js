// mobile menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// highlight section while scrolling
const navLogo = document.querySelector("#navbar-logo");

const highlightMenu = () => {
    const highlightEl = document.querySelector(".highlight");
    const aboutEl = document.querySelector("#about");
    const workEl = document.querySelector("#work");
    const contactEl = document.querySelector("#contact");
    let scrollPosition = window.scrollY;
    // console.log(scrollPosition);

    // highlight current menu item
    if (window.innerWidth > 960 && scrollPosition < 1000) {
        aboutEl.classList.add("highlight");
        workEl.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2100) {
        workEl.classList.add("highlight");
        aboutEl.classList.remove("highlight");
        contactEl.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition > 2100) {
        contactEl.classList.add("highlight");
        workEl.classList.remove("highlight");
        return;
    }

    if ((highlightEl && innerWidth < 960 && scrollPosition <600) || highlightEl) {
        highlightEl.classList.remove("highlight");
    }
};

window.addEventListener("scroll" , highlightMenu);
window.addEventListener("click" , highlightMenu);

// close mobile menu after clicking

const closeMobile = () => {
    const hamburgerMenu = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && hamburgerMenu) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", closeMobile);
navLogo.addEventListener("click", closeMobile);