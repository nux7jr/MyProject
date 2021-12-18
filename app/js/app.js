var menu = document.querySelector(".menu");
var popUpBtn = document.querySelector(".burger-menu");

var orderBtn = document.querySelector(".btn-order");
var orderWindow = document.querySelector(".order-window");
var closeFormBtn = orderWindow.querySelector(".close-form-btn");

var btnsOrder = document.querySelectorAll(".btnOrder"); // кпопка в card

var moreInfoBnt = document.querySelector(".btn-more-info");
var card = document.querySelector(".card");

var formFocus = document.querySelector(".input-name");
// burger menu

popUpBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  menu.classList.toggle("menu--active");
});

// order window

// открытие формы
// фокус на форме
function focusForm() {
  formFocus.focus();
}
// кпопка в меню
orderBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  orderWindow.classList.add("order-window--active");
  focusForm();
});
// кпопки в карточках
for (var btnsOrders of btnsOrder) {
  btnsOrders.addEventListener("click", changeClass);
}
function changeClass(orderWindow) {
  var orderWindow = document.querySelector(".order-window");
  orderWindow.classList.add("order-window--active");
  focusForm();
}

// закрытие формы
closeFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  orderWindow.classList.remove("order-window--active");
});

// scroll
moreInfoBnt.addEventListener("click", function () {
  var mainInfo = document.querySelector(".main-info-hr");
  mainInfo.scrollIntoView({
    behavior: "smooth",
    top: 2000,
  });
});
//# sourceMappingURL=app.js.map
