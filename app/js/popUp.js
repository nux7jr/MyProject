var orderBtn = document.querySelector(".btn-order");
var orderWindow = document.querySelector(".order-window");
var closeFormBtn = orderWindow.querySelector(".close-form-btn");
var btnsOrder = document.querySelectorAll(".btnOrder");
var formFocus = document.querySelector(".input-name");

function focusForm() {
  formFocus.focus();
}
orderBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  orderWindow.classList.add("order-window--active");
  focusForm();
});

for (var btnsOrders of btnsOrder) {
  btnsOrders.addEventListener("click", changeClass);
}
function changeClass() {
  var orderWindow = document.querySelector(".order-window");
  orderWindow.classList.add("order-window--active");
  focusForm();
}

closeFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  orderWindow.classList.remove("order-window--active");
});
// var closeFormEsc = function closeFormd(evt) {};
