var sideNav = document.querySelector('#side_nav');
var sideNavButton = document.querySelector(".navbar-toggler");



function openNav() {
    $sideNav.toggle().width="100%";
}
function closeNav(){
    sideNav.style.width="0";
}
$(document).ready(function(){

$("button").click(function() {
    $(sideNav).toggle(1000);
});
});

$(".search").click(function () {
    $(".input").toggleClass("active").focus();
    $(this).toggleClass("animate");
    $(".input").val("");
});
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});