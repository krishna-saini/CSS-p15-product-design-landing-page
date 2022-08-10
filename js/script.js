///////////////////////////////////////////////////////////
// Make mobile navigation work
console.log("hola");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav-header");

btnNavEl.addEventListener("click", function () {
  console.log("hola");
  headerEl.classList.toggle("nav-open");
});
