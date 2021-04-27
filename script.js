const navButton = document.getElementsByClassName("nav-button");
const navBar = document.getElementsByClassName("navbar");
const navBarLink = document.getElementsByClassName("nav_l");

const toggleNav = () => {
  navBar[0].classList.toggle("hide__navbar");
};

console.log(navBarLink);

Array.from(navBarLink).forEach((element) => {
  console.log(element);
  element.addEventListener("click", toggleNav);
});

navButton[0].addEventListener("click", toggleNav);

const fixedHomeButton = document.getElementById("fixedbutton");
const parallax = document.getElementById("parallax");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", () => {
  let pageOffset = window.pageYOffset;
  if (pageOffset < 175) {
    fixedHomeButton.classList.add("hide__fixed__button");
  } else {
    fixedHomeButton.classList.remove("hide__fixed__button");
  }

  parallax.style.backgroundPositionY = pageOffset * 0.1 + "px";
  parallax2.style.backgroundPositionY = pageOffset * 0.05 + "px";
});
