$(document).ready(function () {
	var $swiper = $(".swiper2");

	var mySwiper = new Swiper(".swiper2", {
		spaceBetween: 5,
		slidesPerView: 3,
		centeredSlides: true,
		roundLengths: true,
		loop: true,
		autoplay: {
			delay: 3000, // 시간 설정
			disableOnInteraction: false, // false-스와이프 후 자동 재생
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
	});
});
