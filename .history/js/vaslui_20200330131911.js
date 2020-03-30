
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav, .sidenav li').toggleClass('active');
  });