var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2
    },
    // when window width is >= 499px
    1100: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 499px
    1250: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
});