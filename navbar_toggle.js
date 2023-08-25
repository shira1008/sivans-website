const navBtn = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  linkContainer.classList.toggle("show-links");
});
