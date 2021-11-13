// Burger menu
$(document).ready(function() {
  $('.burger-menu').click(function() {
    $('.menu').toggleClass('menu--active');
  });
});
// PopUp 
$(document).ready(function() {
  $('.btn-order').click(function() {
    $('.order-window').addClass('order-window--active');
  });
  $('.btnOrder').click(function() {
    $('.order-window').addClass('order-window--active');
  });
  $('.close-form-btn').click(function (){
    $('.order-window').removeClass('order-window--active');
  })
});

// scroll
// что-то с функцией
(document).ready(function () {
  $("#scrollDownBttn").click(function(){            
    $('html, body').animate({
            scrollDown: $("#pinkRegion").offset().top
        }, 500);
});
})