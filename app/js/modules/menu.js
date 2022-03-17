const menu = () => {
  const menu = document.querySelector(".menu");
  const popUpBtn = document.querySelector(".burger-menu");

  popUpBtn.addEventListener("click", function (evt) {
    evt.preventDefault;
    menu.classList.toggle("menu--active");
  });
};
menu();
