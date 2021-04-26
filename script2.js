// // Create a condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia("(min-width: 768px)");

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     // Then log the following message to the console
//     console.log("Media Query Matched!");
//   }
// }

// // Register event listener
// mediaQuery.addListener(handleTabletChange);

// // Initial check
// handleTabletChange(mediaQuery);

// nav button

const navButton = document.getElementsByClassName("nav-button");
const navBar = document.getElementsByClassName("navbar");
const toggleNav = () => {
  console.log(navBar[0]);
  navBar[0].classList.toggle("hide__navbar");
};

navButton[0].addEventListener("click", toggleNav);

// To home button

window.addEventListener("scroll"), ()



// parallax scroll

const parallax = document.getElementById("parallax");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", () => {
  let pageOffset = window.pageYOffset;
  // console.log(pageOffset);
  parallax.style.backgroundPositionY = pageOffset * 0.1 + "px";
  parallax2.style.backgroundPositionY = pageOffset * 0.05 + "px";
});
