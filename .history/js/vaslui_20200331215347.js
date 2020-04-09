
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(window).width(function(){
var txt ="";
txt += $(window).height(); 
txt += " x " + $().width();
$('#wh').append(txt);
  });