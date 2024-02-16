document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest(".menu-burger")) {
    document.documentElement.classList.toggle("menu-open");
    document.body.classList.toggle("lock");
    //  e.preventDefault();
  }
});
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".menu__body")) {
    document.documentElement.classList.remove("menu-open");
    //  e.preventDefault();
  }
});
