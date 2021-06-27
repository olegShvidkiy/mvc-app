document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("menu-active");
  document.querySelector(".wrapper").classList.toggle("wrapper-active");
  document.querySelector(".button").classList.toggle("button-active");
});
