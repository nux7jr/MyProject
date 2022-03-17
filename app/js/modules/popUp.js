const popUp = () => {
  const orderBtn = document.querySelector(".btn-order");
  const orderWindow = document.querySelector(".order-window");
  const closeFormBtn = orderWindow.querySelector(".close-form-btn");
  const btnsOrder = document.querySelectorAll(".btnOrder");
  const formFocus = document.querySelector(".input-name");

  function focusForm() {
    formFocus.focus();
  }
  orderBtn.addEventListener("click", function (evt) {
    evt.preventDefault;
    orderWindow.classList.add("order-window--active");
    focusForm();
  });

  for (let btnsOrders of btnsOrder) {
    btnsOrders.addEventListener("click", changeClass);
  }
  function changeClass() {
    const orderWindow = document.querySelector(".order-window");
    orderWindow.classList.add("order-window--active");
    focusForm();
  }

  closeFormBtn.addEventListener("click", function (evt) {
    evt.preventDefault;
    orderWindow.classList.remove("order-window--active");
  });
};
popUp();
