$(document).ready(function(){
  $('.tallents-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });

  initImgSliderOpasity();

  $('.slick-dots').on('click', function(){
    initImgSliderOpasity();
  });

  $('.tallents-slider-item').on('click', function(){
    initImgSliderOpasity();
  });

  function initImgSliderOpasity() {

    var imgSliderItems = $('.tallents-slider-item');

    imgSliderItems.removeClass('tallents-slider-item-1');
    imgSliderItems.removeClass('tallents-slider-item-2');

    var target = $('.slick-current');

    target.next().addClass('tallents-slider-item-1');
    target.next().next().addClass('tallents-slider-item-2');
    target.prev().addClass('tallents-slider-item-1');
    target.prev().prev().addClass('tallents-slider-item-2');
  }

});