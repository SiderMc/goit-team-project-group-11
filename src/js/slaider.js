$('.hotel-hero-slider').slick({
  appendArrows: '.arrows-container',
  prevArrow: `<div class="prev-arrow-container"><svg class="prev-arrow" xmlns="http://www.w3.org/2000/svg" width="9" height="16" fill="none">
    <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15 1 8l7-7"/>
    </svg></div>`,
  nextArrow: `<div class="next-arrow-container"><svg class="next-arrow" xmlns="http://www.w3.org/2000/svg" width="9" height="16" fill="none">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 15 7-7-7-7"/>
    </svg></div>`,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  swipe: true,
  touchMove: true,
});
