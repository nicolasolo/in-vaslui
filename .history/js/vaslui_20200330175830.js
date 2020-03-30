
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(document).change(function(){
var txt ="";
txt += $(window).height(); 
txt += " x " + $(window).width();
$('#wh').append(txt);
  })