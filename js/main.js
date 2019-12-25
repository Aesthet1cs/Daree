$(function(){

    $('.header__slider').slick({
        asNavFor: '.slider-dots',
        infinite:true,
        fade: true,
        arrows: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Slider_Right_Arrow">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Slider_Left_Arrow">',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
          {
          breakpoint: 931,
          settings: "unslick",
        },
      ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Slider_Right_Arrow">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Slider_Left_Arrow">',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,

            }
          },
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });

    $('.holder__slider, .shop__slider').slick({
        infinite:true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Slider_Right_Arrow">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Slider_Left_Arrow">',
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });

    $('.quantity-button').on('click', function(){
        let sum = $('.nights').val() * $('.sum').data('price') + ($('.guests').val() - 1) * $('.sum').data('price');
        $('.sum').html('$'+ sum);
    });
    let sum = $('.nights').val() * $('.sum').data('price') + ($('.guests').val() - 1) * $('.sum').data('price');
    $('.sum').html('$'+ sum);

    $('.surfboard-dots__circle').on('click', function(){
      $(this).toggleClass('active')
    });

    $('.menu-btn__inner').on('click', function(){
      $('.menu__list').toggleClass('menu-btn__active')
    });

});