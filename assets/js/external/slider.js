$(window).on('load resize orientationchange', function() {
    var $carousel = $(".awe__quiz_hero_cards");
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 767) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          arrows: false,
          dots: false,
          infinite: false,
        });
      }
    }
  }); 

  $(window).on('load resize orientationchange', function() {
    var $carousel = $(".astro__cards_main_slider");
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 767) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          arrows: false,
          dots: false,
          infinite: false,
        });
      }
    }
  }); 

  $(window).on('load resize orientationchange', function() {
    var $carousel = $(".initial__cards_slider");
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 767) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          arrows: false,
          dots: false,
          infinite: false,
        });
      }
    }
  }); 