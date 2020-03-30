
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav ').toggleClass('active');
    $('.sidenav li').toggleClass('active');
  });