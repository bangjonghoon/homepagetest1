$(document).ready(function () {
	var $swiper = $(".swiper3");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
});


