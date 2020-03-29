var sideNav = document.querySelector('#side_nav');
var sideNavButton = document.querySelector(".navbar-toggler");



function openNav() {
    $sideNav.toggle().width="100%";
}
function closeNav(){
    sideNav.style.width="0";
}
$sideNavButton.click(function() {
    $("sideNav").toggle();
});