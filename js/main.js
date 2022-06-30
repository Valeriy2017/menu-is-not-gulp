$('.header__menu--burger').on('click', function (e) {
   e.preventDefault;
   $(this).toggleClass('header__menu--burger-active');
   $('nav.header__menu').toggleClass('active');

});