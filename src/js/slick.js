$('.responsive').slick({
  infinite: true,
  arrows: true,
  draggable: true,
  appendArrows: 'restaurant-slick-arrow-block',
  prevArrow: '.restaurant-btn-prev',
  nextArrow: '.restaurant-btn-next',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  autoplaySpeed: 300,
  mobileFirst: true,
  centerMode: true,
  swipe: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
