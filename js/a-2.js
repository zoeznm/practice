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
