
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(wind).width(function(){
var txt ="";
txt += $(window).height(); 
txt += " x " + $(window).width();
$('#wh').append(txt);
  })