$(document).ready(function(){
  // ! 메인 메뉴
  $(".submenu").hide();
  $(".mainmenu").mouseover(function(){
    $(".submenu").stop().slideDown(300);
   }).mouseout(function(){
    $(".submenu").stop().slideUp(300);
  });
  // ! 이미지 슬라이드
  $(".slide > a:gt(0)").hide();

  setInterval(function(){
    $('.slide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slide');
  }, 3000);
  // ! 탭 메뉴

  // ! 팝업 창 
});