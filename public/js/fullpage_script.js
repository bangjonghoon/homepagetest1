console.clear();

function FullPage__init() {
	var myFullpage = new fullpage("#fullpage", {
		anchors: ["firstPage", "secondPage", "3rdPage"],
		navigation: true,
		navigationPosition: "right",
		navigationTooltips: ["First page", "Second page", "Third and last page"],
		//responsiveWidth: 1366,//반응형

		onLeave: function (origin, destination, direction) {
			var origin = this;
			// 스크롤 내렸을 시

			if (destination.index == 1) {
				$(".header").addClass("down");
			} else if (destination.index == 2) {
				$(".header").addClass("down");
			} else if (destination.index == 3) {
				$(".header").addClass("down");
			} else if (destination.index == 4) {
				$(".header").addClass("down");
			} else if (destination.index == 5) {
				$(".header").addClass("down");
			} else {
				$(".header").removeClass("down");
			}
		},
	});
}
FullPage__init();
