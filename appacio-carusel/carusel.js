$('.phone-carusel').slick({
    infinite: true,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
    ]
  });