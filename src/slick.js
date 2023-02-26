$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: false,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
