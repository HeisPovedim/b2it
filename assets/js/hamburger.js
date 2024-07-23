document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector(".header__burger");
  let menu = $(".header__nav");

  burger.addEventListener("click", function () {
    if (burger.classList.contains("active")) {
      menu.slideDown(300);
    } else {
      menu.slideUp(300);
    }
  });
});
