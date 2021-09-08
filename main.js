var btn = document.querySelector(".menubtn");
var menu = document.querySelector(".menu");
var link = document.querySelector(".links");
var clicked = false;

const openMenu = () => {
    link.style.opacity = "1";
    menu.style.width = "15vw";
    clicked = true;
};
const closeMenu = () => {
    link.style.opacity = "0";
    menu.style.width = "0vw";
    clicked = false;
};

const menuClick = () => {
    clicked === false ? openMenu() : closeMenu()
};

btn.addEventListener("click", menuClick);