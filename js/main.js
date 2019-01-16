
////launch slick.js////
$(document).ready(function(){
  $('.js-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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


////animate "team nameplate"////
$('.js-nameplate').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('team__nameplate_active');
  //add active class to property ".team__socials-list"
  $(this).find('.js-nameplate-socials-A').toggleClass('team__socials-list_active');
  $(this).find('.js-nameplate-socials-B').toggleClass('team__socials-list_active');
  $(this).find('.js-nameplate-socials-C').toggleClass('team__socials-list_active');
  $(this).find('.js-team-scales-B').toggleClass('team__scales_active');
});