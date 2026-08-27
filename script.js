const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".desktop-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("mobile-open");
  });
});
