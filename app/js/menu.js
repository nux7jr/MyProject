var menu = document.querySelector(".menu");
var popUpBtn = document.querySelector(".burger-menu");

popUpBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  menu.classList.toggle("menu--active");
});
