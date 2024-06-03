$(function () {
	$(window).on("load scroll", function () {
		const $firstMenu = $(".gnb>ul>li");
		const $header = $(".header");
		const visuHeight = $(".visual ").outerHeight();
		const $toggle = $(".btn_all_menu");
		const scrollTop = $(window).scrollTop();

		if (scrollTop >= 90) {
			$header.addClass("down");
		} else {
			$header.removeClass("down");
		}

		$firstMenu
			.mouseenter(function () {
				$header.stop().animate({ height: "365px" }, 300);
			})
			.mouseleave(function () {
				$header.stop().animate({ height: "90px" }, 300);
			});

		$toggle.click(function () {
			$(this).toggleClass("active");
			$(".overlay").toggleClass("active");
		});
	});
});
