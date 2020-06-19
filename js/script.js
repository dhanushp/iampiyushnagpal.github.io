// Header
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

function expandMenu(){
    nav.classList.toggle("expanded");
}

hamburger.addEventListener("click",expandMenu);

// Scroll to Top Function

const scrollButton = document.getElementById("scroll__top__btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

scrollButton.addEventListener("click",topFunction);