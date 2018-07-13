Tellents = window.Tellents || {};
Tellents.Landing = Tellents.Landing || {};
Tellents.Landing.data = Tellents.Landing.data || {};

Tellents.Landing.data.teams = {

    init: function() {    
        this.initMobileMenuToggle();  
        this.initSlick();
    },

    initMobileMenuToggle: function(){
        var mainNav = $('.landing-nav'),
            toggleBtn = mainNav.find('.humburger-icon'),
            toggleMenuLi = mainNav.find('.nav-list-item'),
            rightColHack = $('.header-nav');

        toggleBtn.on('click', function(){
            mainNav.toggleClass('menu-open');
            rightColHack.toggleClass('menu-open');
        });

        toggleMenuLi.on('click', function(){
            if(mainNav.hasClass('menu-open')){
                mainNav.toggleClass('menu-open');
                rightColHack.toggleClass('menu-open');
            }
        })
    },

    initSlick: function(){
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

    }

   
};

$(function () {
    Tellents.Landing.data.teams.init();
});