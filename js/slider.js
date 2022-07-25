const swiper = new Swiper('.swiper', {
 
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  
});

const swiper2 = new Swiper('.products__swiper', {
  
  direction: 'horizontal',
  loop: true,
  
  slidesPerView:3,
  spaceBetween:40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});