$(document).ready(function(){
// ! 메인메뉴
$('.navi > li').mouseover(function(){
  $(this).find('.subMenu').stop().slideDown(300);
}).mouseout(function(){
  $(this).find('.subMenu').stop().slideUp(300);
});

// ! 이미지 슬라이드
$(".slide > a:gt(0)").hide();

setInterval(function(){
  $('.slide div:first-child').fadeOut()
  .next('div').fadeIn()
  .end().appendTo('div');
}, 3000);

// ! 탭메뉴

// ! 모달창
});