window.onload = function() {
  var submenu = document.querySelector(".submenu");
  var mainmenu = document.querySelector(".mainmenu");

  submenu.style.height = '0';
  submenu.style.overflow = 'hidden';
  submenu.style.transition = 'height 0.4s ease';

  mainmenu.onmouseover = function() {
    submenu.style.height = submenu.scrollHeight + 'px';
  };

  mainmenu.onmouseout = function() {
    submenu.style.height = '0';
  };
};
setInterval(function(){
  $('#slide1>ul').delay(3000);
  $('#slide1>ul').animate({marginLeft: "-1200px"})
  $('#slide1>ul').delay(3000);
  $('#slide1>ul').animate({marginLeft: "-2400px"})
  $('#slide1>ul').delay(3000);
  $('#slide1>ul').animate({marginLeft: "0px"})
});










