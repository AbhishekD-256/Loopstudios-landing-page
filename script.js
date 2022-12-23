const hamBurger = document.querySelector(".menu-icon");
const close = document.querySelector(".close-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar-mobile").style.transform = "translateX(110%)";
});

close.addEventListener("click", function () {
  document.querySelector(".navbar-mobile").style.transform =
    "translateX(-110%)";
});
