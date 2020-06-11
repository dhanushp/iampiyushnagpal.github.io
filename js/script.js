// Header
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

function expandMenu(){
    nav.classList.toggle("expanded");
}

hamburger.addEventListener("click",expandMenu);

//