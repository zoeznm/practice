$(document).ready(function(){
  setInterval(function(){
      $('.img_box').animate({left: '-1200px'}, 1000, function(){
          $(this).css({left: 0}).append($(this).find('img:first'));
      });
  }, 3000);
});












