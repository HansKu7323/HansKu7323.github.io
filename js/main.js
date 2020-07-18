// back to top
const $win = $(window);
const back = $('#back');

$(function () {
      const $win = $(window);
      const $backToTop = $('#back');  
      $win.scroll(function () {
      if ($win.scrollTop() > 50) {
      $backToTop.show();
      } else {
      $backToTop.hide();
      }
    })
  });
  
  back.on('click',function(){
    
    $('html, body').animate({scrollTop: 0}, 200);
  });