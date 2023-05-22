$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true
    
  });
  function updateSliderPosition() {
    var translateX = currentIndex * -33.33; /* Ajuste esse valor de acordo com o número de itens no carrossel */
    $('.slider__inner').css('transform', 'translateX(' + translateX + '%)');
  }
  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });
  document.querySelector('.default-btn').addEventListener('click', function() {
    window.location.href = 'final.php';
  });

});