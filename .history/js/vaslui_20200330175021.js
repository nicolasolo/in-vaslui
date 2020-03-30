
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(document).ready(function(){
var txt ="";
txt += $(window).height();
$('#wh').append(txt);
  })