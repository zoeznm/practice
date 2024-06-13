$(document).ready(function(){
// ! mainmenu
$('.navi > li').mouseover(function(){
  $(this).find('.subMenu').stop().slideDown(300);
}).mouseout(function(){
  $(this).find('.subMenu').stop().slideUp(300);
});

// ! slide

// ! modal
});