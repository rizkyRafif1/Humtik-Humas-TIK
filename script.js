const header = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add(
      "bg-[#38302E]/80",
      "backdrop-blur-md"
    );

    header.style.boxShadow = "inset 0 -1px 0 0 rgba(0,0,0,0.1)";
  } else {
    header.classList.remove(
      "bg-[#38302E]/80",
      "backdrop-blur-md"
    );

    header.style.boxShadow = "none";
  }
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener("click", () => {
  console.log("CLICKED");
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
