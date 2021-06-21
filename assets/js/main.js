/*=====  CLOSE TOPBAR  ======*/
const topBarClose = document.getElementById("topbar__close");

if (topBarClose) {
  topBarClose.addEventListener("click", () => {
    const topBar = document.querySelector(".topbar");
    topBar.classList.add("hide");
  });
}

/*=====  TOGGLE MENU  ======*/
const navbar = document.querySelector(".navbar__content");
const toggleMenu = document.getElementById("toggle-menu");
const clickCatcher = document.getElementById("body-click-catcher");
const links = document.querySelectorAll(".nav_link");

if (toggleMenu && clickCatcher && links) {
  toggleMenu.addEventListener("click", () => {
    navbar.classList.add("show");
    clickCatcher.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  function closeMenu() {
    navbar.classList.remove("show");
    clickCatcher.style.display = "none";
    document.body.style.overflow = "auto";
  }

  clickCatcher.addEventListener("click", closeMenu);
  // close on link clicks
  links.forEach((link) => link.addEventListener("click", closeMenu));
}

/*=====  APPLY STICKY HEADER  ======*/
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (scrollY >= 300) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});

/*=====  BACK TO TOP  ======*/
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("back-to-top");
  if (this.scrollY >= 300) backToTop.classList.add("show-scroll");
  else backToTop.classList.remove("show-scroll");
});
