const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

new Swiper(".swiper1", {
	autoplay: {
		delay: 5000, // 시간 설정
		disableOnInteraction: false, // false-스와이프 후 자동 재생
	},

	initialSlide: 0,
	effect: "fade", //페이드 효과
	loop: false, // 반복재생 여부
	loopAdditionalSlides: 1,
	slidesPerView: 1, //레이아웃 뷰 개수
	centeredSlides: true, //센터모드
	touchRatio: 0,
	resistance: true,

	// pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// nav 화살표 출력 시 추가
	navigation: {
		prevEl: ".prev",
		nextEl: ".next",
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty("--progress", 1 - progress);
			progressContent.textContent = `${Math.ceil(time / 1000)}s`;
		},
		init: function () {
			const videos = document.querySelectorAll("video");
			const activeIndex = this.realIndex;
			const activeSlide = document.getElementsByClassName("swiper-slide")[activeIndex];
			const activeVideo = activeSlide.getElementsByTagName("video")[0];
			activeVideo.muted = true;
			Array.prototype.forEach.call(videos, function (video) {
				video.pause();
				video.currentTime = 0;
			});
			activeVideo.play();
		},

		slideChange: function () {
			const videos = document.querySelectorAll("video");
			const activeIndex = this.realIndex;
			const activeSlide = document.getElementsByClassName("swiper-slide")[activeIndex];
			const activeVideo = activeSlide.getElementsByTagName("video")[0];
			activeVideo.muted = true;
			Array.prototype.forEach.call(videos, function (video) {
				video.pause();
				video.currentTime = 0;
			});
			activeVideo.play();
		},
	},
});
