
$('.hamburger-menu').click (function(){
    $(this).toggleClass('open');
    $('.sidenav').toggleClass('active');
  });
  $(window).resize(function(){
    $( window ).resize(function() {
      var width = $(window).width();
      var height = $(window).height();
      $('span').text( 'Browser Window width : '+ $(window).width();  );
     });