let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let navbarItem = document.querySelector(".navbar-items");
let navx = document.querySelectorAll(".links");

burger.addEventListener("click", () => {
  navbarItem.classList.toggle("h-class");
  nav.classList.toggle("v-class");
});

// Handle hover effects for desktop navigation links
navx.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("hover");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("hover");
  });
});

//navbar scroll
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const sro = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".links", {
  ...sro,
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".left_box h1", {
  ...sro,
  delay: 500,
});
ScrollReveal().reveal(".left_box h2", {
  ...sro,
  delay: 1000,
});
ScrollReveal().reveal(".left_box p", {
  ...sro,
  delay: 1500,
});
ScrollReveal().reveal(".left_box .btn", {
  ...sro,
  delay: 2000,
});
ScrollReveal().reveal(".right img", {
  ...sro,
  origin: "right",
});
ScrollReveal().reveal(".text", {
  ...sro,
  delay: 2300,
  origin: "top",
});
