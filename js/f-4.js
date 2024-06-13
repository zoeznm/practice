$(document).ready(function(){
  //서브메뉴표출
  $('#header .gnb > ul > li').mouseover(function(){
      $('.sub_menu').stop().slideDown(300);
  })
  $('#header').mouseleave(function(){
      $('.sub_menu').stop().slideUp(300);
  })
  //슬라이드
  setInterval(function(){
      $('.slide ul').delay(3000);
      $('.slide ul').animate({marginTop:'-350px'});
      $('.slide ul').delay(3000);
      $('.slide ul').animate({marginTop:'-700px'});
      $('.slide ul').delay(3000);
      $('.slide ul').animate({marginTop:'0px'}); 
  })
  //모달창생성
  $('.notice li:first-of-type').click(function(){
      $('.modal').css('display','block');
  })
  $('.modal_cont > button').click(function(){
      $('.modal').css('display','none');
  })
})