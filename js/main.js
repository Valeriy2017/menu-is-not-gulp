$('.header__menu--burger').on('click', function (e) {
   e.preventDefault;
   $(this).toggleClass('header__menu--burger-active');
   $('.header__menu--item').toggleClass('header__menu--item-active');

});