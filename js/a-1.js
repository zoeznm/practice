$(document).ready(function(){
// ! 메인메뉴
$(".subMenu").hide();
$(".mainMenu").mouseover(function(){
  $(".subMenu").stop().slideDown(300);
}).mouseout(function(){
  $(".subMenu").stop().slideUp(300);
});
// ! 슬라이드
$(".slide > a:gt(0)").hide();

setInterval(function(){
  $('.slide li:first-child').fadeOut()
  .next('li').fadeIn()
  .end().appendTo('.slide');
}, 3000);

// ! 탭메뉴
$(function(){
  $(".tabMenu > li > a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
     return false;
  });
});
// ! 모달창 
$('.notice li:first').click(function(){
  $('#modalWrap').addClass("active");
});
$('.btn').click(function(){
  $('#modalWrap').removeClass("active");
});
});
