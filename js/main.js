
////launch slick.js////
$(document).ready(function(){
  $('.js-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});

////launch svg////
svg4everybody();


////animate header menu////
$('.js-menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.js-menu-btn-shape').toggleClass('menu-btn__shape_active');
  $('.header__menu').toggleClass('header__menu_active');
});


////color transition of burger menu button////
$('.js-menu-btn').on('mouseover', function(e) {
  e.preventDefault();
  $('.js-menu-btn-shape').addClass('menu-btn__shape_mouseover');
  $('.js-menu-btn-shape').removeClass('menu-btn__shape_mouseout');
});

$('.js-menu-btn').on('mouseout', function(e) {
  e.preventDefault();
  $('.js-menu-btn-shape').removeClass('menu-btn__shape_mouseover');
  $('.js-menu-btn-shape').addClass('menu-btn__shape_mouseout');
});
