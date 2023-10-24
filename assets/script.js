// Mobile Menu

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("toggle-btn");
const navClose = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  overlay.style.opacity = "0.4";
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  overlay.style.opacity = "0";
});

const navLinks = document.querySelector(".navigation");

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    overlay.style.opacity = "0";
  });
});
