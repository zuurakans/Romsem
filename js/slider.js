const swiper = new Swiper('.swiper', {
 
  direction: 'horizontal',
  loop: true,
  autoplay:true,
  speed:500,

  pagination: {
    el: '.swiper-pagination',
  },

  
});

const swiper2 = new Swiper('.products__swiper', {
  
  direction: 'horizontal',
  loop: true,
  autoplay:true,
  speed:1000,
  slidesPerView:3,
  spaceBetween:40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});