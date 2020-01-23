$(window).on('load', function () {
    $('.loading').fadeOut(1500, function () {
        $(".loading").remove();
      });
})
$(document).ready(function(){

  if (sessionStorage.getItem('splash') !== 'true') {
    $('.loading').fadeOut(1500, function () {
      $(".loading").remove();
    });
      sessionStorage.setItem('splash','true');
  }
  else {
    $(".loading").remove();
  }    
});