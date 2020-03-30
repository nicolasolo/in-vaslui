
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(window).ad(function(){
var txt ="";
txt += $(window).height(); 
txt += " x " + $(window).width();
$('#wh').append(txt);
  });